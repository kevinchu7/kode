/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'iconify mdi:home' },
  // { text: '博客', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // { text: '外链', link: 'https://github.com' },
  {
    text: '前端',
    items: [
      {
        text: '前端基础', items: [
          { text: 'HTML/CSS', link: '/frontend-basics/html-css/overview/' },
          { text: 'JavaScript', link: '/frontend-basics/javascript/overview/' },
          { text: 'TypeScript', link: '/frontend-basics/typescript/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: 'VUE3', items: [
          { text: '核心语法', link: '/frontend-vue3/basics/overview/' },
          { text: '组件与路由', link: '/frontend-vue3/components-router/overview/' },
          { text: '接口请求', link: '/frontend-vue3/api-requests/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: 'UI组件库', items: [
          { text: 'Element Plus', link: 'https://element-plus.org/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: '工程化', items: [
          { text: '包管理', link: '/frontend-proj/package/npm/' },
          { text: '构建', link: '/frontend-proj/build/vite/' },
        ],
        icon: 'iconify mdi:tag',
      },],
    icon: 'iconify mdi:web-asset',
  },


  {
    text: '后端',
    items: [
      {
        text: 'Java', items: [
          { text: '核心基础', link: '/backend-java/basics/overview/' },
          { text: 'JVM', link: '/backend-java/jvm/overview/' },
          { text: '新特性', link: '/backend-java/new-features/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: '主流框架', items: [
          { text: 'Spring', link: '/backend-framework/spring/overview/' },
          { text: 'SpringBoot', link: '/backend-framework/springboot/overview/' },
          { text: 'MyBatis-Plus', link: '/backend-framework/mybatis-plus/overview/' },],
        icon: 'iconify mdi:tag',
      },
      {
        text: '微服务', items: [
          { text: 'Nacos', link: '/backend-microservices/nacos/overview/' },
          { text: 'Gateway', link: '/backend-microservices/gateway/overview/' },
          { text: 'Sentinel', link: '/backend-microservices/sentinel/overview/' },
          { text: 'Dubbo', link: '/backend-microservices/dubbo/overview/' }
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: '工程化', items: [
          { text: 'Maven', link: '/backend-proj/maven/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },],
    icon: 'iconify mdi:server',
  },


  {
    text: '中间件',
    items: [
      {
        text: '消息队列', items: [
          { text: 'RabbitMQ', link: '/middleware-mq/rabbitmq/overview/' },
          { text: 'RocketMQ', link: '/middleware-mq/rocketmq/overview/' },
          { text: 'Kafka', link: '/middleware-mq/kafka/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: '任务调度', items: [
          { text: 'XXL-JOB', link: '/middleware-job/xxl-job/overview/' }
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: '搜索引擎', items: [
          { text: 'Elasticsearch', link: '/middleware-search/elasticsearch/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },],
    icon: 'iconify mdi:box-variant-closed',
  },


  {
    text: '数据库',
    items: [
      {
        text: '关系型', items: [
          { text: 'MySQL', link: '/database-rdbms/mysql/overview/' },
          { text: 'PostgreSQL', link: '/database-rdbms/postgresql/overview/' },
          { text: 'Oracle', link: '/database-rdbms/oracle/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: 'NoSQL', items: [
          { text: 'Redis‌', link: '/database-nosql/redis/overview/' },
          { text: 'MongoDB', link: '/database-nosql/mongodb/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },],
    icon: 'iconify mdi:database',
  },


  {
    text: '运维',
    items: [
      {
        text: '服务器维护', items: [
          { text: 'Linux常用命令', link: '/ops-server/linux-cmds/overview/' },
          { text: '网络基础', link: '/ops-server/network-basics/overview/' },
          { text: 'Nginx', link: '/ops-server/nginx/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: '容器与云原生', items: [
          { text: 'Docker', link: '/ops-cloud/docker/overview/' },
          { text: 'Kubernetes', link: '/ops-cloud/kubernetes/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
      {
        text: 'CI/CD', items: [
          { text: 'Jenkins', link: '/ops-ci-cd/jenkins/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },],
    icon: 'iconify mdi:docker',
  },


  {
    text: '工具',
    items: [
      {
        text: 'Git', link: '/tool/git/overview/'
      },
    ],
    icon: 'iconify mdi:toolbox-outline',
  },


  {
    text: 'AI',
    items: [
      {
        text: 'vibe coding', items: [
          { text: 'Claude', link: '/vibe-coding/claude/overview/' },
        ],
        icon: 'iconify mdi:tag',
      },
    ],
    icon: 'iconify mdi:brain-freeze-outline',
  },


  {
    text: '更多',
    items: [
      {
        text: '关于本站', link: '/about/',icon: 'iconify mdi:about-circle-outline',
      },
      {
        text: '留言与反馈', link: '/messagebd/', icon: 'iconify mdi:message-reply-text-outline',
      },
      {
        text: '友情链接', link: '/friends/', icon: 'iconify mdi:people-group',
      }
    ],
    icon: 'iconify mdi:more-circle-outline',
  },

])
