// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kadesh Docs',
  //tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.kadeshchain.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        specs: [{
          route: '/docs/Chain',
          //route: '/api/',
          //spec: 'https://test.kadirguventurk.com/yml/openapi3.yml',
          //spec: 'https://raw.githubusercontent.com/KadirBerat/KadirBerat/main/openapi3.yml',
          //spec: 'kadeshchain/static/yaml/openapi3.yml',
          spec: 'https://raw.githubusercontent.com/KadirBerat/KadeshYml/main/openapi3.yml',
        }],
      }
    ],
  ],
  scripts: [
    {
      src: 'https://docs.kadeshchain.com/js/custom.js',
      async: false,
    }
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        //title: 'Kadesh',
        logo: {
          alt: 'Kadesh',
          src: 'img/kadesh/logo.svg',
          href: '/docs/Overview',
        },
        items: [
          {
            to: 'https://kadeshchain.com',
            position: 'left',
            label: 'Home',
            
          },
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            label: 'Docs',
          },
          {
            to: 'https://www.kadeshchain.com/Explorer',
            label: 'Explorer',
          },
          {
            to: 'https://www.kadeshchain.com/Wallet',
            label: 'Wallet',
          },
          {
            to: 'https://www.kadeshchain.com/Faucet',
            label: 'Faucet',
          },
          {
            to: 'https://dual0.kadesh-testnet.hub5.net:3001/',
            label: 'API',
          },
          {
            to: 'https://facebook.com/kadeshchain',
            className: 'facebook-link social-link',
          },
          {
            to: 'https://twitter.com/kadeshchain',
            className: 'twitter-link social-link',
          },
          {
            to: 'https://linkedin.com/company/kadeshchain',
            className: 'linkedin-link social-link',
          },
          {
            to: 'https://instagram.com/kadeshchain',
            className: 'instagram-link social-link',
          },
          {
            to: 'https://t.me/kadeshchain',
            className: 'telegram-link social-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //      title: 'Docs',
        //      items: [
        //        {
        //          label: 'Tutorial',
        //          to: '/docs/intro',
        //        },
        //      ],
        //   }
        // ],
        //copyright: `Copyright © ${new Date().getFullYear()} kadeshchain.`,
        copyright: `© Kadeshchain All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        //darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
