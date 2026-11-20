# Docusaurus on App Service Builder

A minimal static documentation site about starting with App Service Builder
samples and choosing between a static site, an API, and a frontend with a
backend. Edit the two Markdown pages in `docs/` to make it your own.

## Run locally

Use Node.js 24 and npm. From the repository root:

```sh
npm ci
npm start
```

For a production-style preview, stop the development server and run:

```sh
npm run build
npm run serve
```

Open the address printed by Docusaurus. Check the home page and open
`/choose-an-architecture/` directly.

## Host on App Service Builder

Use an authorized App Service Builder preview target for development or test.
Fork this repository, then connect the fork and intended branch to a Builder app.
Keep `builder.yaml`, `package.json`, and `package-lock.json` at the repository
root. See the [App Service Builder docs](https://builder.appservice.azure.com/docs/)
for setup and deployment.

- **Publish the generated site.** The root `builder.yaml` declares a `static`
  component. The custom build runs `npm ci`, builds the site, and copies
  `build/` into `$DESTINATION_DIR/build/` for Builder to publish. Do not commit
  `build/` or add a `run` block. `npm start` starts a local development server,
  not the hosted site.
- **Match the URL path to the host.** This sample uses `baseUrl: '/'` and
  Builder's `path: /`. When importing a GitHub Pages project that uses a
  prefix such as `/my-repo/`, use a build-time override or separate config for
  Builder's root-hosted build. Prefer relative Markdown links and Docusaurus
  link helpers over hard-coded prefixes. Set `DOCUSAURUS_SITE_URL` at build time
  (or update `docusaurus.config.js`) to the real origin before sharing the site,
  so canonical URLs and the sitemap point to the deployed host.
- **Smoke-test the deployment.** Open `/`, directly request
  `/choose-an-architecture/`, and check that a generated JS or CSS asset loads.
  If the build says `docusaurus: not found`, check the install step and lockfile.
  If HTML loads but assets return 404, check the `baseUrl` and deployment path.

This sample does not need runtime secrets or backing services. Values embedded
in a static build are public to visitors.
