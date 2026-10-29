---
title: Overview
description: 'Overview of remote SKPL instance data transfer provider.'
tags:
  - providers
---

# Remote SKPL Providers

Remote SKPL providers connect to an instance of SKPL over a network using a websocket.

Internally, the remote SKPL providers map websocket requests to a local SKPL provider of the instance it is running in.

In order to use remote transfer providers, the remote SKPL server must have a value for `transfer.token.salt` configured in `config/admin.js` and the remote transfer feature must not be disabled.

## Disabling Remote Transfers

The remote transfer feature of a server can be completely disabled by setting the server config value:

```javascript
// in config/server.js
{
  transfer: {
    remote: {
      enabled: false;
    }
  }
  // ...the rest of your server config
}
```
