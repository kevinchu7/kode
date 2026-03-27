/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // { text: '外链', link: 'https://github.com' },
  { text: 'JAVA', link: '/java/overview/' },
  // {
  //   text: '笔记',
  //   items: [{ text: '示例', link: '/demo/README.md' }]
  // },

  {
    text: '数据库',
    items: [
      {
        text: '数据库基础', items: [
          { text: 'SQL语法', link: '/site/notices/' },
        ]
      },
      {
        text: '关系型数据库', items: [
          { text: 'MySQL', link: '/site/notices/' },
          { text: 'PostgreSQL', link: '/site/notices/' },
          { text: 'Oracle', link: '/site/notices/' },
        ]
      },
      {
        text: 'NoSQL', items: [
          { text: 'Redis‌', link: '/site/notices/' },
          { text: 'MongoDB', link: '/site/notices/' },
        ]
      },]
  },

  {
    text: '运维',
    items: [
      {
        text: '服务器', items: [
          { text: 'Linux常用命令', link: '/site/notices/' },
        ]
      },
      {
        text: '容器与云原生', items: [
          { text: 'Docker', link: '/site/notices/' },
          { text: 'Kubernetes', link: '/site/notices/' },
        ]
      },
      {
        text: 'CI/CD', items: [
          { text: 'Jenkins', link: '/site/notices/' },
        ]
      },]
  },

  {
    text: '更多',
    items: [
      {
        text: '关于本站', link: '/site/notices/'
      },
      {
        text: '传送门', link: '/site/notices/'
      },
    ]
  }

])
