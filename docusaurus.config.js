/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Jean Snyman",
  tagline: "Always document you work!",
  url: "https://my-doc-site.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  //favicon: "img/favicon.ico",
  favicon: "img/profileImage.jfif",
  organizationName: "snymanje", // Usually your GitHub org/user name.
  projectName: "my-doc-site", // Usually your repo name.
  themeConfig: {
    /* algolia: {
      contextualSearch: true,
    }, */
    navbar: {
      title: "Jean Snyman",
      logo: {
        alt: "Logo",
        src: "img/profileImage.jfif",
      },
      items: [
        {
          href: "https://github.com/snymanje/my-doc-site",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social Links",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JSWebDocs, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/snymanje/my-doc-site/edit/main/",
          showLastUpdateTime: true,
          editLocalizedFiles: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "hourly",
        priority: 0.5,
        trailingSlash: false,
      },
    ],
  ],
};
