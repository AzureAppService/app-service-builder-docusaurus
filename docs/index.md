---
title: Start with an App Service Builder sample
sidebar_label: Get started
sidebar_position: 1
slug: /
---

# Start with an App Service Builder sample

App Service Builder can deploy an app from a GitHub repository. A sample gives
you working source code and a `builder.yaml` that describes what to build and
serve. This site is itself a sample: Builder publishes the generated Docusaurus
pages and assets without starting a Node.js server.

1. [Choose a sample that fits your app](./choose-an-architecture.md).
2. Fork it into a GitHub account or organization you can deploy from. Keep its
   root `builder.yaml` and follow its README to build it locally.
3. If you have preview access, connect the fork and branch to a Builder app on
   an authorized development or test target. Deploy the sample before making
   larger changes so you have a working baseline.
4. Replace the sample content with one feature of your own. Keep the build
   reproducible and add server components only when the feature needs them.

For this site, try adding a Markdown page under `docs/`. Rebuild and check that
the new page appears in the sidebar and opens directly by URL.
