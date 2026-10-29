# @skpl/provider-upload-local

## Resources

- [LICENSE](LICENSE)

## Links

- [SKPL website](https://strapi.io/)
- [SKPL documentation](https://docs.strapi.io)
- [SKPL community on Discord](https://discord.strapi.io)
- [SKPL news on Twitter](https://twitter.com/strapijs)

## Installation

```bash
# using yarn
yarn add @skpl/provider-upload-local

# using npm
npm install @skpl/provider-upload-local --save
```

## Configurations

This provider has only one parameter: `sizeLimit`.

### Provider Configuration

`./config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100000,
      },
    },
  },
  // ...
});
```

The `sizeLimit` parameter must be a number. Be aware that the unit is in bytes, and the default is 1000000000 (1GB). When setting this value high, you should make sure to also configure the body parser middleware `maxFileSize` so the file can be sent and processed — it defaults to roughly 200MB, and rejects larger files before the upload plugin ever sees them. Read more [here](https://docs.strapi.io/developer-docs/latest/plugins/upload.html#configuration)

### Security Middleware Configuration

Special configuration of the SKPL Security Middleware is not required on this provider since the default configuration allows loading images and media from `"'self'"`.
