// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Spicetify',
  tagline: 'Powerful CLI tool to take control of the Spotify client.',
  url: 'https://spicetify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'spicetify',
  projectName: 'spicetify-docs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/spicetify/spicetify-docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/spicetify/spicetify-docs/edit/main',
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
      metadata: [{ name: 'keywords', content: 'spicetify, spotify, customization, documentation, blog' }],
      image: 'images/spicetify-full.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: false,
        },
      },
      navbar: {
        title: 'Spicetify',
        logo: {
          alt: 'Spicetify Logo',
          src: 'images/spicetify.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            html: `
            <div style="display:flex;align-items:center">
              <img src="https://img.shields.io/github/stars/spicetify/spicetify-cli?style=social" alt="GitHub stars" />
            </div>
            `,
            href: 'https://github.com/spicetify/spicetify-cli',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Advanced Usage',
                to: '/docs/advanced-usage',
              },
              {
                label: 'Addons',
                to: '/docs/addons',
              },
              {
                label: 'Development',
                to: '/docs/development',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Community Themes',
                href: 'https://github.com/spicetify/spicetify-themes',
              },
              {
                label: 'Documentation',
                href: 'https://github.com/spicetify/spicetify-docs',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VnevqPp2Rr',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/spicetify',
              },
            ],
          },
          {
            title: 'Supporters',
            items: [
              {
                html: `
                <div>
                  <p style="margin:0;font-weight:500">Open Collective</p>
                  <a href="https://opencollective.com/spicetify" target="_blank">
                    <img src="https://opencollective.com/spicetify/tiers/supporter.svg?avatarHeight=36" alt="Open Collective" />
                  </a>
                </div>
                `,
              },
              {
                html: `
                <div>
                  <p style="margin-bottom:0.25rem;font-weight:500">Sponsors</p>
                  <a href="https://anthems.framer.website/?utm_source=spicetify&utm_medium=top-fan" target="_blank">
                    <img src="images/anthems.svg" alt="Anthems Logo" width="128"" />
                  </a>
                </p>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Spicetify. Built with 🎶 and 🦖.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '8V2X4EIOO7',
        apiKey: 'd538fac3f86b5167706ae2e5c3cce353',
        indexName: 'spicetify',
      },
    }),
};

module.exports = config;
