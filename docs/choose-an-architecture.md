---
title: Choose an architecture
sidebar_position: 2
---

# Choose an architecture

Start with the simplest sample that meets your app's needs. Choose based on
what needs to run for each request, not just the language you prefer.

| What you're building | Sample | Why choose it |
| --- | --- | --- |
| Documentation or a handbook | Docusaurus (this repository) | Markdown pages and navigation become static files at build time. |
| An interactive browser UI | [Vite](https://github.com/AzureAppService/app-service-builder-vite) | Use a frontend build when the browser can handle the interaction and no custom server is needed. |
| An API or webhook | [Express](https://github.com/AzureAppService/app-service-builder-express) | Run server code when requests need validation, private credentials, or data access. |
| A browser UI with an API | [React + Express](https://github.com/AzureAppService/app-service-builder-react-express) | Keep the compiled frontend and server-side API as separate components. |
| Pages rendered at request time | [Next.js](https://github.com/AzureAppService/app-service-builder-nextjs) | Use server rendering when page content depends on each request. |

For example, a product handbook can stay static even if it includes interactive
widgets. If you later add a feedback form that writes to a database, put that
logic in an API. Keep credentials on the server, not in generated HTML or
browser JavaScript.
