/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Jean Snyman",
  tagline: "Always document you work!",
  url: "https://www.jeansnyman.com/",
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
      apiKey: "12312312",
      indexName: "sfdsefe",
    }, */
    prism: {
      additionalLanguages: ["powershell"],
    },
    navbar: {
      title: "Jean Snyman",
      logo: {
        alt: "Logo",
        src: "img/profileImage.jfif",
      },
      items: [
        {
          href: "https://github.com/snymanje",
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
              label: "LinkedIn",
              href: "https://linkedin.com/in/jean-snyman-js",
            },
            {
              label: "Github",
              href: "https://github.com/snymanje",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/JeanSnyman",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Jean Snyman`,
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
        sitemap: {
          changefreq: "hourly",
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
};
