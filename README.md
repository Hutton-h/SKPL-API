<p align="center">
  <a href="https://github.com/Hutton-h/SKPL-API#gh-light-mode-only">
    <img src="packages/core/admin/admin/src/assets/images/logo-skpl.svg" width="318px" alt="SKPL logo" />
  </a>
  <a href="https://github.com/Hutton-h/SKPL-API#gh-dark-mode-only">
    <img src="packages/core/admin/admin/src/assets/images/logo-skpl.svg" width="318px" alt="SKPL logo" />
  </a>
</p>

<h3 align="center">Open-source headless API platform, self-hosted — you're in control.</h3>
<p align="center">SKPL API (formerly Strapi) — the leading open-source headless CMS, 100% JavaScript/TypeScript, flexible and fully customizable.</p>
<p align="center"><a href="https://github.com/Hutton-h/SKPL-API">Repository</a> · <a href="https://docs.strapi.io">Strapi Docs</a></p>

<br>

SKPL API is a self-hosted headless CMS forked from Strapi that lets developers build content APIs fast while giving content creators a friendly editing interface. Define your content models and SKPL API generates a full API, ready to consume from any frontend, mobile app, or IoT device.

- Design content structures visually with the [**Content-Type Builder**](https://docs.strapi.io/cms/features/content-type-builder), no code required
- Auto-generated [**REST**](https://docs.strapi.io/cms/api/rest) & [**GraphQL**](https://docs.strapi.io/cms/plugins/graphql) APIs for every content type
- Granular [**Roles & Permissions**](https://docs.strapi.io/cms/features/users-permissions) out of the box
- Built-in [**Media Library**](https://docs.strapi.io/cms/features/media-library), [**Internationalization (i18n)**](https://docs.strapi.io/cms/features/internationalization), and [**Draft & Publish**](https://docs.strapi.io/cms/features/draft-and-publish)
- First-class **TypeScript** support with flexible database options (SQLite, PostgreSQL, MySQL, MariaDB)
- Extensible [**plugin system**](https://docs.strapi.io/cms/plugins-development/developing-plugins) and customizable admin dashboard

> Explore all features at **[strapi.io/features](https://strapi.io/features)**

### How SKPL API handles requests

Every incoming request flows through a layered backend architecture: **Routes → Middlewares → Controllers → Services**.

> Learn more about backend customization in the [Strapi official docs](https://docs.strapi.io/cms/backend-customization).

## Getting Started

<a href="https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html" target="_blank">Read the Strapi Getting Started tutorial</a> or follow the steps below:

### ⏳ Installation

Use the **Quickstart** command below to create a new SKPL API project instantly:

```bash
npx create-strapi@latest my-project
```

This command generates a brand new project with the default features (authentication, permissions, content management, content type builder & file upload).

> Full installation options (including TypeScript, `--quickstart`, etc.) in the **[CLI installation docs](https://docs.strapi.io/cms/installation/cli#creating-a-strapi-project)**

### Requirements

> Hardware & software requirements (OS, Node.js, databases) at **[Requirements docs](https://docs.strapi.io/cms/deployment#hardware-and-software-requirements)**

## Docker

SKPL API doesn't ship official Docker images, so you build your own from your project. The fastest way to get started is with the community CLI tool:

```bash
npx @strapi-community/dockerize@latest
```

This generates a `Dockerfile` and `docker-compose.yml` tailored to your project. See the [strapi-tool-dockerize](https://github.com/strapi-community/strapi-tool-dockerize) repo for more details.

> Dockerfiles, Docker Compose examples, production builds at **[Docker installation docs](https://docs.strapi.io/cms/installation/docker)**

## LaunchPad

The official demo template combining Strapi with Next.js to get you started quickly.

## Development

```bash
# Initial setup (run once after cloning)
yarn install
yarn setup

# Run the dev sandbox
cd examples/getstarted
yarn develop                  # SQLite (default)
```

## License

SKPL API is a rebranded fork of [Strapi](https://github.com/strapi/strapi) and is distributed under the same license terms:

* The Community Edition is licensed under the [MIT Expat](https://github.com/strapi/strapi/blob/main/LICENSE) license.
* Portions of the software that reside under an "ee/" directory are Enterprise Edition and are licensed under [Strapi's EE license](https://github.com/strapi/strapi/blob/main/packages/core/admin/ee/LICENSE).

Copyright (c) 2015-present Strapi Solutions SAS — retained as required by the MIT Expat license.
