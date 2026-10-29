#!/usr/bin/env bash
#
# SKPL API 一键部署脚本 —— kejilion 放置规范
# 应用目录：/home/docker/skpl-api/（compose、源码、数据统一放这里）
# 端口登记：/home/docker/skpl-api_port.conf
# 域名访问：通过 kejilion 菜单"添加域名访问"反代 127.0.0.1:1337
#
# 用法：
#   bash skpl-deploy.sh install    # 安装（构建镜像并启动）
#   bash skpl-deploy.sh update     # 更新（拉取最新代码重新构建）
#   bash skpl-deploy.sh uninstall  # 卸载（删容器，保留数据目录）
#   bash skpl-deploy.sh domain     # 配置域名访问（自动改 PUBLIC_URL）
#

set -e

APP_NAME="skpl-api"
APP_DIR="/home/docker/${APP_NAME}"
PORT=1337
REPO="https://github.com/Hutton-h/SKPL-API.git"

# ---------- 工具函数 ----------
# 生成 48 位纯字母数字密钥（避免 sed / shell 特殊字符问题）
rand_secret() { tr -dc 'A-Za-z0-9' </dev/urandom | head -c 48; }

check_env() {
  command -v docker >/dev/null || { echo "未安装 Docker，请先用 kejilion 脚本安装 Docker"; exit 1; }
  docker compose version >/dev/null 2>&1 || { echo "未安装 docker compose 插件"; exit 1; }
}

write_port_conf() { echo "$PORT" > "/home/docker/${APP_NAME}_port.conf"; }

# ---------- 安装 ----------
install_app() {
  check_env
  mkdir -p "$APP_DIR"/{uploads,pgdata}

  if [ ! -d "$APP_DIR/src" ]; then
    echo ">>> 拉取源码到 $APP_DIR/src"
    git clone "$REPO" "$APP_DIR/src"
  else
    echo ">>> 更新源码到最新版本"
    git -C "$APP_DIR/src" pull
  fi

  cd "$APP_DIR/src"

  # 生成 docker-compose.yml（密钥自动生成，bind mount 指向上级数据目录）
  cat > docker-compose.yml <<EOF
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: skpl-api
    restart: always
    ports:
      - '${PORT}:${PORT}'
    environment:
      DB: postgres
      DATABASE_HOST: db
      DATABASE_PORT: '5432'
      DATABASE_NAME: skpl
      DATABASE_USERNAME: skpl
      DATABASE_PASSWORD: $(rand_secret)
      APP_KEYS: $(rand_secret),$(rand_secret)
      API_TOKEN_SALT: $(rand_secret)
      ADMIN_JWT_SECRET: $(rand_secret)
      TRANSFER_TOKEN_SALT: $(rand_secret)
      ENCRYPTION_KEY: $(rand_secret)
      JWT_SECRET: $(rand_secret)
      # PUBLIC_URL: https://api.example.com
      # IS_PROXIED: 'true'
    volumes:
      - $APP_DIR/uploads:/app/examples/getstarted/public/uploads
    depends_on:
      - db

  db:
    image: postgres:16-alpine
    container_name: skpl-db
    restart: always
    environment:
      POSTGRES_DB: skpl
      POSTGRES_USER: skpl
      POSTGRES_PASSWORD: skpl-placeholder
    volumes:
      - $APP_DIR/pgdata:/var/lib/postgresql/data
EOF

  # 让 app 与 db 的数据库密码保持一致（用 | 作分隔符，避免 base64 密钥中的 / 截断 sed）
  DB_PASS=$(grep -m1 'DATABASE_PASSWORD:' docker-compose.yml | awk '{print $2}')
  sed -i "s|POSTGRES_PASSWORD: skpl-placeholder|POSTGRES_PASSWORD: ${DB_PASS}|" docker-compose.yml

  echo ">>> 构建镜像并启动（首次构建需要 15~30 分钟，建议内存 ≥4GB）"
  docker compose up -d --build

  write_port_conf
  echo ""
  echo "==============================================="
  echo " SKPL API 安装完成"
  echo " 访问地址: http://服务器IP:${PORT}/admin"
  echo " 首次访问请注册管理员账号"
  echo " 数据目录: $APP_DIR"
  echo " 后续可在 kejilion 菜单中为该应用添加域名访问"
  echo "==============================================="
}

# ---------- 更新 ----------
update_app() {
  check_env
  [ -d "$APP_DIR/src" ] || { echo "未安装，请先执行 install"; exit 1; }
  cd "$APP_DIR/src"
  git pull
  docker compose up -d --build
  echo ">>> 更新完成"
}

# ---------- 卸载 ----------
uninstall_app() {
  check_env
  cd "$APP_DIR/src" 2>/dev/null && docker compose down || true
  rm -f "/home/docker/${APP_NAME}_port.conf"
  echo ">>> 容器已删除，数据保留在 $APP_DIR（如不再需要可手动 rm -rf 删除）"
}

# ---------- 域名访问 ----------
domain_app() {
  [ -d "$APP_DIR/src" ] || { echo "未安装，请先执行 install"; exit 1; }
  read -rp "请输入域名（不带 https://，如 api.example.com）: " DOMAIN
  [ -n "$DOMAIN" ] || { echo "域名不能为空"; exit 1; }
  cd "$APP_DIR/src"
  sed -i "s|# PUBLIC_URL:.*|PUBLIC_URL: https://${DOMAIN}|" docker-compose.yml
  sed -i "s|# IS_PROXIED:.*|IS_PROXIED: 'true'|" docker-compose.yml
  docker compose up -d
  echo ""
  echo ">>> 已设置 PUBLIC_URL=https://${DOMAIN}"
  echo ">>> 请在 kejilion 菜单执行：添加域名访问 -> 域名 ${DOMAIN} -> 反代 127.0.0.1 ${PORT}"
}

case "${1:-install}" in
  install)   install_app ;;
  update)    update_app ;;
  uninstall) uninstall_app ;;
  domain)    domain_app ;;
  *) echo "用法: bash skpl-deploy.sh [install|update|uninstall|domain]"; exit 1 ;;
esac
