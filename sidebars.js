/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Advanced Usage',
      collapsed: false,
      link: {
        type: 'generated-index',
        description: 'A guide about advanced usage of Spicetify and venturing outside of the Spicetify Marketplace.',
        slug: '/advanced-usage',
      },
      items: [
        'advanced-usage/installation',
        'advanced-usage/uninstallation',
        'advanced-usage/command-line',
        'advanced-usage/themes',
        'advanced-usage/extensions',
        'advanced-usage/custom-apps',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      link: {
        type: 'generated-index',
        description: "Let's learn about how to contribute to the Spicetify community!",
        slug: '/development',
      },
      items: [
        'development/compiling',
        'development/themes',
        'development/custom-apps',
        'development/js-modules',
        'development/spotify-cli-flags',
        {
          type: 'category',
          label: 'Spicetify Creator',
          link: {
            type: 'generated-index',
            description: 'The easy way to create extensions and custom apps!',
            slug: '/development/spicetify-creator',
          },
          items: [
            'development/spicetify-creator/the-basics',
            'development/spicetify-creator/create-extensions',
            'development/spicetify-creator/create-custom-apps',
            'development/spicetify-creator/building-and-testing',
          ],
        },
        {
          type: 'category',
          label: 'API Wrapper',
          link: {
            type: 'doc',
            id: 'development/api-wrapper/index',
          },
          items: [
            'development/api-wrapper/modules',
            {
              type: 'category',
              label: 'Methods',
              link: {
                type: 'generated-index',
                description: 'A list of all methods in the API Wrapper.',
                slug: '/development/api-wrapper/methods',
              },
              items: [
                'development/api-wrapper/methods/platform',
                'development/api-wrapper/methods/cosmos-async',
                'development/api-wrapper/methods/graphql',
                'development/api-wrapper/methods/player',
                'development/api-wrapper/methods/keyboard',
                'development/api-wrapper/methods/local-storage',
                'development/api-wrapper/methods/uri',
                'development/api-wrapper/methods/popup-modal',
                'development/api-wrapper/methods/panel',
                'development/api-wrapper/methods/app-title',
              ],
            },
            {
              type: 'category',
              label: 'Classes',
              link: {
                type: 'generated-index',
                description: 'A list of all classes in the API Wrapper.',
                slug: '/development/api-wrapper/classes',
              },
              items: [
                'development/api-wrapper/classes/context-menu',
                'development/api-wrapper/classes/menu',
                'development/api-wrapper/classes/topbar',
                'development/api-wrapper/classes/playbar',
              ],
            },
            {
              type: 'category',
              label: 'Functions',
              link: {
                type: 'generated-index',
                description: 'A list of all functions in the API Wrapper.',
                slug: '/development/api-wrapper/functions',
              },
              items: [
                'development/api-wrapper/functions/add-to-queue',
                'development/api-wrapper/functions/remove-from-queue',
                'development/api-wrapper/functions/color-extractor',
                'development/api-wrapper/functions/get-audio-data',
                'development/api-wrapper/functions/show-notification',
                'development/api-wrapper/functions/get-font-style',
              ],
            },
            {
              type: 'category',
              label: 'Properties',
              link: {
                type: 'generated-index',
                description: 'A list of all properties in the API Wrapper.',
                slug: '/development/api-wrapper/properties',
              },
              items: [
                'development/api-wrapper/properties/config',
                'development/api-wrapper/properties/svgicons',
                'development/api-wrapper/properties/queue',
                'development/api-wrapper/properties/react-components',
                'development/api-wrapper/properties/react-hook',
                'development/api-wrapper/properties/tippy-props',
              ],
            },
            {
              type: 'category',
              label: 'Types',
              link: {
                type: 'generated-index',
                description: 'A list of all type definitions in the API Wrapper.',
                slug: '/development/api-wrapper/types',
              },
              items: [
                {
                  type: 'category',
                  label: 'CosmosAsync',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the CosmosAsync method.',
                    slug: '/development/api-wrapper/types/cosmos-async',
                  },
                  items: [
                    'development/api-wrapper/types/cosmos-async/body',
                    'development/api-wrapper/types/cosmos-async/headers',
                    'development/api-wrapper/types/cosmos-async/method',
                    'development/api-wrapper/types/cosmos-async/error',
                    'development/api-wrapper/types/cosmos-async/response',
                  ],
                },
                {
                  type: 'category',
                  label: 'ContextMenu',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the ContextMenu class.',
                    slug: '/development/api-wrapper/types/context-menu',
                  },
                  items: [
                    'development/api-wrapper/types/context-menu/onclick-callback',
                    'development/api-wrapper/types/context-menu/should-add-callback',
                  ],
                },
                {
                  type: 'category',
                  label: 'Keyboard',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the Keyboard method.',
                    slug: '/development/api-wrapper/types/keyboard',
                  },
                  items: [
                    'development/api-wrapper/types/keyboard/validkey',
                    'development/api-wrapper/types/keyboard/keysdefine',
                  ],
                },
                {
                  type: 'category',
                  label: 'URI',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the URI method.',
                    slug: '/development/api-wrapper/types/uri',
                  },
                  items: [
                    'development/api-wrapper/types/uri/type',
                    'development/api-wrapper/types/uri/validation-functions',
                  ],
                },
                {
                  type: 'category',
                  label: 'ReactComponent',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the ReactComponent property.',
                    slug: '/development/api-wrapper/types/react-component',
                  },
                  items: [
                    'development/api-wrapper/types/react-component/context-menu-props',
                    'development/api-wrapper/types/react-component/menu-props',
                    'development/api-wrapper/types/react-component/menu-item-props',
                    'development/api-wrapper/types/react-component/tooltip-props',
                    'development/api-wrapper/types/react-component/icon-component-props',
                    'development/api-wrapper/types/react-component/text-component-props',
                    'development/api-wrapper/types/react-component/confirm-dialog-props',
                    'development/api-wrapper/types/react-component/panel-skeleton-props',
                    'development/api-wrapper/types/react-component/panel-content-props',
                    'development/api-wrapper/types/react-component/panel-header-props',
                    'development/api-wrapper/types/react-component/toggle-props',
                    'development/api-wrapper/types/react-component/slider-props',
                  ],
                },
                {
                  type: 'category',
                  label: 'Panel',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the Panel method.',
                    slug: '/development/api-wrapper/types/panel',
                  },
                  items: [
                    'development/api-wrapper/types/panel/panel-props',
                  ],
                },
                {
                  type: 'category',
                  label: 'GraphQL',
                  link: {
                    type: 'generated-index',
                    description: 'A list of all type definitions in the GraphQL method.',
                    slug: '/development/api-wrapper/types/graphql',
                  },
                  items: [
                    'development/api-wrapper/types/graphql/query',
                  ],
                },
                'development/api-wrapper/types/metadata',
                'development/api-wrapper/types/context-track',
                'development/api-wrapper/types/context-option',
                'development/api-wrapper/types/player-state',
                'development/api-wrapper/types/provided-track',
                'development/api-wrapper/types/svgicon',
                'development/api-wrapper/types/semantic-color',
                'development/api-wrapper/types/variant',
              ],
            },
          ],
        },
      ],
    },
    'faq',
  ],
};

module.exports = sidebars;
