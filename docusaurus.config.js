/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Jean Snyman",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
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
        alt: "My Site Logo",
        //src: "img/logo.svg",
        src: "img/profileImage.jfif",
      },
      items: [
        /* {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        }, */
        //{ to: "blog", label: "Blog", position: "left" },
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
              label: "Blog",
              to: "/blog",
            },
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
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
