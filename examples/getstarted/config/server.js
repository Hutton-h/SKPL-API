'use strict';

const cronTasks = require('./src/cron-tasks');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // PUBLIC_URL：反向代理后的对外地址（如 https://api.example.com），不设置则省略
  ...(process.env.PUBLIC_URL ? { url: process.env.PUBLIC_URL } : {}),
  // IS_PROXIED=true 时信任代理头（X-Forwarded-*），配合 Nginx 反代使用
  ...(env.bool('IS_PROXIED', false) ? { proxy: { koa: true } } : {}),
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
  webhooks: {
    // TODO: V5, set to false by default
    // Receive populated relations in webhook and db lifecycle payloads
    // This only populates relations in all content-manager endpoints
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', true),
  },
  // ℹ️ http_proxy is the env var used by system to set proxy globally
  proxy: {
    global: env('http_proxy'),
  },
  http: {
    serverOptions: {
      requestTimeout: 1000 * 60 * 10, // set request timeout to 600000ms (10 minutes)
    },
  },
  transfer: {
    remote: {
      // enabled: false,
    },
  },
  logger: {
    config: {
      level: 'silly',
    },
    updates: {
      // enabled: false,
    },
    startup: {
      // enabled: false,
    },
  },
  mcp: {
    enabled: true,
  },
});
