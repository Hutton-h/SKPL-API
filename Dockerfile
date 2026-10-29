# syntax=docker/dockerfile:1

########## 构建阶段 ##########
FROM node:22-bookworm-slim AS build

# 限制 Node 堆内存为 2GB，避免单进程吃满整机
ENV NODE_OPTIONS=--max-old-space-size=2048
ENV NX_PARALLEL=1

RUN corepack enable

WORKDIR /app
COPY . .

RUN yarn install

# 第一步：所有包只构建代码（跳过 .d.ts 类型生成，类型仅在开发/发布时需要）
# build:code 比 build 省一半以上内存和时间
RUN yarn build:code --parallel=1

# 第二步：单独构建实例应用的管理后台（admin 前端 Webpack 构建）
# getstarted build 内部会调用 @skpl/admin 的已构建产物
RUN yarn workspace getstarted build

########## 运行阶段 ##########
FROM node:22-bookworm-slim

ENV NODE_ENV=production
RUN corepack enable

WORKDIR /app
COPY --from=build /app /app

EXPOSE 1337

CMD ["yarn", "workspace", "getstarted", "start"]
