/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'App Service Builder Starter Guide',
  url: process.env.DOCUSAURUS_SITE_URL ?? 'https://example.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'App Service Builder',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guide',
          label: 'Starter guide',
          position: 'left',
        },
        {
          href: 'https://builder.appservice.azure.com/docs/',
          label: 'Builder docs',
          position: 'right',
        },
      ],
    },
  },
};
