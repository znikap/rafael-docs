import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Rafael - Docs',
  tagline: 'Com gestionar el contingut del teu lloc web',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment
  url: 'https://znikap.github.io',
  baseUrl: '/rafael-docs/',

  // GitHub pages deployment config
  organizationName: 'znikap',
  projectName: 'rafael-docs',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ca',
    locales: ['ca'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Docs at root
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Rafael - Docs',
      logo: {
        alt: 'Rafael Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentació',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Messi',
        src: 'img/messi.png',
        width: 128,
        height: 128,
      },
      links: [
        {
          title: 'Web',
          items: [
            { label: 'Rafael.cat', href: 'https://rafael.cat' },
            { label: 'Admin Panel', href: 'https://rafael.cat/adminet' },
          ],
        },
        {
          title: 'Continguts',
          items: [
            { label: 'Pàgines', to: '/continguts/pagines' },
            { label: 'Projectes', to: '/continguts/projectes' },
            { label: 'Navegació', to: '/continguts/navegacio' },
          ],
        },
        {
          title: 'Blocs',
          items: [
            { label: 'Text', to: '/blocs/text' },
            { label: 'Imatges', to: '/blocs/images' },
            { label: 'Tots els blocs', to: '/blocs/intro' },
          ],
        },
        {
          title: 'Altres',
          items: [
            { label: 'Publicar canvis', to: '/publicar' },
            { label: 'Manteniment', to: '/manteniment' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Rafael · Fet amb  🧠  per <a href="https://znikap.github.io" target="_blank" rel="noopener noreferrer">znikap</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
