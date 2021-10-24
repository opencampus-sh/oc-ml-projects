const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'opencampus.sh machine learning projects',
  tagline: 'check out the projects',
  url: 'https://opencampus-sh.github.io',
  baseUrl: '/oc-ml-projects/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_OC.ico',
  organizationName: 'opencampus-sh', // Usually your GitHub org/user name.
  projectName: 'oc-ml-projects', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'opencampus logo with text',
        src: 'img/logo_OC_w_text.png',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://edu.opencampus.sh',
          label: 'Courses',
          position: 'left',
        },
        {
          href: 'https://opencampus.gitbook.io/opencampus-machine-learning-program/',
          label: 'ML Program',
          position: 'left',
        },
        {
          href: 'https://github.com/opencampus-sh/oc-ml-projects',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    image: "static/img/logo_OC.png",
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Opencampus',
          items: [
            {
              label: 'opencampus.sh homepage',
              href: 'https://opencampus.sh',
            },
            {
              label: 'EDU Hub',
              href: 'https://edu.opencampus.sh',
            },
            {
              label: 'Machine Learning Degree',
              href: 'https://edu.opencampus.sh/courses/158',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mattermost',
              href: 'https://chat.opencampus.sh',
            },
            {
              label: 'Slack',
              href: 'https://opencampus-sh.slack.com',
            },
            {
              label: 'KielAI',
              href: 'https://kiel.ai/',
            },
          ],
        },
        {
          title: 'Events',
          items: [
            {
              label: 'Waterkant Festival',
              href: 'https://www.waterkant.sh/',
            },
            {
              label: 'Prototyping Week',
              href: 'https://starterkitchen.de/ptw/',
            },
            {
              label: 'Coding Waterkant',
              href: 'https://coding-waterkant-2021.devpost.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Opencampus.sh. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/opencampus-sh/ML-Projects/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
