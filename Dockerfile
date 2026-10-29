# syntax=docker/dockerfile:1

########## 构建阶段：编译 monorepo 全部包 + 构建管理后台 ##########
FROM node:22-bookworm-slim AS build

# 限制 Node 堆内存（8GB 机器给 3GB，避免与 Docker/系统抢内存触发 OOM killer）
ENV NODE_OPTIONS=--max-old-space-size=3072
# 限制 Nx 并行任务数，降低内存峰值
ENV NX_PARALLEL=2

# 启用 corepack 以使用 package.json 锁定的 Yarn 4.12.0
RUN corepack enable

WORKDIR /app
COPY . .

# 安装依赖并构建所有 workspace 包（源码为 TS，必须构建出 dist）
RUN yarn install
# --parallel=2 限制并发，防止并行构建把内存打满
RUN yarn build --parallel=2

# 构建实例应用的管理后台（examples/getstarted）
RUN yarn workspace getstarted build

########## 运行阶段 ##########
FROM node:22-bookworm-slim

ENV NODE_ENV=production
RUN corepack enable

WORKDIR /app
COPY --from=build /app /app

EXPOSE 1337

# 启动实例应用（等同于在 examples/getstarted 下执行 skpl start）
CMD ["yarn", "workspace", "getstarted", "start"]
