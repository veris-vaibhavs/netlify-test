// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Veris Docs',
  tagline: 'Public Documentation of Veris',
  url: 'https://docs.veris.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Digicred-Technologies-Veris', // Usually your GitHub org/user name.
  projectName: 'pubic-docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'Veris',
        logo: {
          alt: 'Veris Logo',
          src: 'img/verisLogo.png',
        },
        items: [ 
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'VMS Docs',
                to: '/docs/category/visitor-management',
              },
               {
                label: 'Hot Desking Docs',
                to: '/docs/category/hot-desking',
              },
              {
                label: 'Integration Docs',
                to: 'docs/category/integrations',
              },
              {
                label: 'FAQs',
                to: 'docs/category/faq',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Blog',
                href: 'https://www.getveris.com/blogs/',
              },
              {
                label: 'Case Studies',
                href: 'https://www.getveris.com/case-study/',
              },
              {
                label: 'Whitepaper',
                href: 'https://www.getveris.com/white-paper/',
              },
              {
                label: 'News',
                href: 'https://www.getveris.com/news/',
              },
            ],
          },
          {
            title: 'Know More',
            items: [
              {
                label: 'About Us',
                href: 'https://www.getveris.com/team/',
              },
              {
                label: 'Terms of Service',
                href: 'https://www.getveris.com/terms-of-service/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://www.getveris.com/privacy-policy/',
              },
              {
                label: 'Partner with Ss',
                href: 'https://www.getveris.com/channel-partner/',
              },
              {
                label: 'Contact Us',
                href: 'https://www.getveris.com/contact-us/',
              },
            ],
          },
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Digicred Technologies Pvt. Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
