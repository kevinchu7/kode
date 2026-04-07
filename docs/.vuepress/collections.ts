/**
 * @see https://theme-plume.vuejs.press/guide/collection/ 查看文档了解配置详情。
 *
 * Collections 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 *
 * 请注意，你应该先在这里配置好 Collections，然后再启动 vuepress，主题会在启动 vuepress 时，
 * 读取这里配置的 Collections，然后在与 Collection 相关的 Markdown 文件中，自动生成 permalink。
 *
 * collection 的  type 为 `post` 时，表示为 文档列表类型（即没有侧边导航栏，有文档列表页）
 * 可用于实现如 博客、专栏 等以文章列表聚合形式的文档集合 （内容相对碎片化的）
 *
 * collection 的 type 为 `doc` 时，表示为文档类型（即有侧边导航栏）
 * 可用于实现如 笔记、知识库、文档等以侧边导航栏形式的文档集合 （内容强关联、成体系的）
 * 如果发现 侧边栏没有显示，那么请检查你的配置是否正确，以及 Markdown 文件中的 permalink
 * 是否是以对应的 Collection 配置的 link 的前缀开头。 是否展示侧边栏是根据 页面链接 的前缀 与 `collection.link`
 * 的前缀是否匹配来决定。
 */

/**
 * 在受支持的 IDE 中会智能提示配置项。
 *
 * - `defineCollections` 是用于定义 collection 集合的帮助函数
 * - `defineCollection` 是用于定义单个 collection 配置的帮助函数
 *
 * 通过 `defineCollection` 定义的 collection 配置，应该填入 `defineCollections` 中
 */
import { defineCollection, defineCollections } from 'vuepress-theme-plume'

// const blog = defineCollection({
//   // post 类型，这里用于实现 博客功能
//   type: 'post',
//   // 文档集合所在目录，相对于 `docs`
//   dir: 'blog',
//   // 文档标题，它将用于在页面的面包屑导航中显示
//   title: 'Blog',
//   // 文章列表页的链接，如果 `linkPrefix` 未定义，它也将作为 相关的文章的 permalink 的前缀
//   link: '/blog/',
//   //   linkPrefix: '/article/', // 相关文章的链接前缀
//   //   postList: true, // 是否启用文章列表页
//   //   tags: true, // 是否启用标签页
//   //   archives: true, // 是否启用归档页
//   //   categories: true, // 是否启用分类页
//   //   postCover: 'right', // 文章封面位置
//   //   pagination: 15, // 每页显示文章数量
// })

// const demoDoc = defineCollection({
//   // doc 类型，该类型带有侧边栏
//   type: 'doc',
//   // 文档集合所在目录，相对于 `docs`
//   dir: 'demo',
//   // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
//   // 如果 前缀不一致，则无法生成侧边栏。
//   // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
//   linkPrefix: '/demo',
//   // 文档标题，它将用于在页面的面包屑导航中显示
//   title: 'Demo',
//   // 手动配置侧边栏结构
//   sidebar: ['', 'foo', 'bar'],
//   // 根据文件结构自动生成侧边栏
//   // sidebar: 'auto',
// })



// 参考 https://github.com/pengzhanbo/vuepress-theme-plume/blob/main/docs/.vuepress/collections/zh/theme-guide.ts
const frontendBasics = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '01-1-frontend-basics',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/frontend-basics/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '前端基础',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'HTML/CSS',
      // 是否折叠
      collapsed: false,
      items: [
        { text: 'overview', link: '/frontend-basics/html-css/overview/' },
        // { text: 'HTML', link: '/frontend-basics/html-css/html/', },
        // { text: 'HTML5', link: '/frontend-basics/html-css/html5/' },
        // { text: 'CSS', link: '/frontend-basics/html-css/css/' },
        // { text: 'CSS3', link: '/frontend-basics/html-css/css3/' },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: 'overview', link: '/frontend-basics/javascript/overview/' },
      ],
    },
    {
      text: 'TypeScript',
      collapsed: false,
      items: [
        { text: 'overview', link: '/frontend-basics/typescript/overview/' },
      ],
    },
  ],
})


const frontendVue3 = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '01-2-frontend-vue3',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/frontend-vue3/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'VUE3',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: '核心语法',
      collapsed: false,
      items: [
        { text: 'overview', link: '/frontend-vue3/basics/overview/' },
      ],
    },
    {
      text: '组件与路由',
      collapsed: false,
      items: [
        { text: 'overview', link: '/frontend-vue3/components-router/overview/' },
      ],
    },
    {
      text: '接口请求',
      collapsed: false,
      items: [
        { text: 'overview', link: '/frontend-vue3/api-requests/overview/' },
      ],
    },
  ],
})


const frontendProj = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '01-4-frontend-proj',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/frontend-proj/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '前端-工程化',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: '包管理',
      collapsed: false,
      items: [
        { text: 'npm', link: '/frontend-proj/package/npm/' },
        { text: 'yarn', link: '/frontend-proj/package/yarn/' },
        { text: 'pnpm', link: '/frontend-proj/package/pnpm/' },
      ],
    },
    {
      text: '构建工具',
      collapsed: false,
      items: [
        { text: 'Vite', link: '/frontend-proj/build/vite/' },
        { text: 'Webpack', link: '/frontend-proj/build/webpack/' },
      ],
    },
  ],
})



const backendJava = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '02-1-backend-java',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/backend-java/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'Java',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: '核心基础',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-java/basics/overview/' },
      ],
    },
    {
      text: 'JVM',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-java/jvm/overview/' },
      ],
    },
    {
      text: 'Java新特性',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-java/new-features/overview/' },
      ],
    },
  ],
})



const backendFramework = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '02-2-backend-framework',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/backend-framework/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '后端-主流框架',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'spring',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-framework/spring/overview/' },
      ],
    },
    {
      text: 'springboot',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-framework/springboot/overview/' },
      ],
    },
    {
      text: 'MyBatis-Plus',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-framework/mybatis-plus/overview/' },
      ],
    },
  ],
})


const backendMicroservices = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '02-3-backend-microservices',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/backend-microservices/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '微服务',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Nacos',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-microservices/nacos/overview/' },
      ],
    },
    {
      text: 'gateway',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-microservices/gateway/overview/' },
      ],
    },
    {
      text: 'sentinel',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-microservices/sentinel/overview/' },
      ],
    },
    {
      text: 'Dubbo',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-microservices/dubbo/overview/' },
      ],
    },
  ],
})


const backendProj = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '02-4-backend-proj',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/backend-proj/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '后端-工程化',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Maven',
      collapsed: false,
      items: [
        { text: 'overview', link: '/backend-proj/maven/overview/' },
      ],
    }
  ],
})


const middlewareMq = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '03-1-middleware-mq',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/middleware-mq/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '消息队列',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'RabbitMQ',
      collapsed: false,
      items: [
        { text: 'overview', link: '/middleware-mq/rabbitmq/overview/' },
      ],
    },
    {
      text: 'RocketMQ',
      collapsed: false,
      items: [
        { text: 'overview', link: '/middleware-mq/rocketmq/overview/' },
      ],
    },
    {
      text: 'Kafka',
      collapsed: false,
      items: [
        { text: 'overview', link: '/middleware-mq/kafka/overview/' },
      ],
    },
  ],
})


const middlewareJob = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '03-2-middleware-job',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/middleware-job/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '任务调度',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'XXL-JOB',
      collapsed: false,
      items: [
        { text: 'overview', link: '/middleware-job/xxl-job/overview/' },
      ],
    },
  ],
})


const middlewareSearch = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '03-3-middleware-search',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/middleware-search/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '搜索引擎',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Elasticsearch',
      collapsed: false,
      items: [
        { text: 'overview', link: '/middleware-search/elasticsearch/overview/' },
      ],
    },
  ],
})


const databaseRDBMS = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '04-1-database-rdbms',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/database-rdbms/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '关系型数据库',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'MySQL',
      collapsed: false,
      items: [
        { text: 'overview', link: '/database-rdbms/mysql/overview/' },
      ],
    },
    {
      text: 'PostgreSQL',
      collapsed: false,
      items: [
        { text: 'overview', link: '/database-rdbms/postgresql/overview/' },
      ],
    },
    {
      text: 'Oracle',
      collapsed: false,
      items: [
        { text: 'overview', link: '/database-rdbms/oracle/overview/' },
      ],
    },
  ],
})



const databaseNoSQL = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '04-2-database-nosql',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/database-nosql/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'NoSQL',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Redis',
      collapsed: false,
      items: [
        { text: 'overview', link: '/database-nosql/redis/overview/' },
      ],
    },
    {
      text: 'Ehcache',
      collapsed: false,
      items: [
        { text: 'overview', link: '/database-nosql/ehcache/overview/' },
      ],
    },
    {
      text: 'MongoDB',
      collapsed: false,
      items: [
        { text: 'overview', link: '/database-nosql/mongodb/overview/' },
      ],
    },
  ],
})


const opsServer = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '05-1-ops-server',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/ops-server/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '服务器维护',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Linux常用命令',
      collapsed: false,
      items: [
        { text: 'overview', link: '/ops-server/linux-cmds/overview/' },
      ],
    },
    {
      text: '网络基础',
      collapsed: false,
      items: [
        { text: 'overview', link: '/ops-server/network-basics/overview/' },
      ],
    },
    {
      text: 'Nginx',
      collapsed: false,
      items: [
        { text: 'overview', link: '/ops-server/nginx/overview/' },
      ],
    },
  ],
})


const opsCloud = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '05-2-ops-cloud',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/ops-cloud/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '容器与云原生',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Docker',
      collapsed: false,
      items: [
        { text: 'overview', link: '/ops-cloud/docker/overview/' },
      ],
    },
    {
      text: 'Kubernetes',
      collapsed: false,
      items: [
        { text: 'overview', link: '/ops-cloud/kubernetes/overview/' },
      ],
    },
  ],
})


const opsCICD = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '05-3-ops-ci-cd',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/ops-ci-cd/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'CI/CD',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Jenkins',
      collapsed: false,
      items: [
        { text: 'overview', link: '/ops-ci-cd/jenkins/overview/' },
      ],
    },
  ],
})


const tool = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '06-tool',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/tool/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: '工具',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Git',
      collapsed: false,
      items: [
        { text: 'overview', link: '/tool/git/overview/' },
      ],
    },
  ],
})



const ai = defineCollection({
  // doc 类型，该类型带有侧边栏
  type: 'doc',
  // 文档集合所在目录，相对于 `docs`
  dir: '07-1-ai-vibe-coding',
  // `dir` 所指向的目录中的所有 markdown 文件，其 permalink 需要以 `linkPrefix` 配置作为前缀
  // 如果 前缀不一致，则无法生成侧边栏。
  // 所以请确保  markdown 文件的 permalink 都以 `linkPrefix` 开头
  linkPrefix: '/vibe-coding/',
  // 文档标题，它将用于在页面的面包屑导航中显示
  title: 'AI coding',
  // 手动配置侧边栏结构
  sidebar: [
    {
      text: 'Claude',
      collapsed: false,
      items: [{
        text: 'overview', link: '/vibe-coding/claude/overview/'
      },
      ],
    }
  ],
})


/**
 * 导出所有的 collections
 * (blog 为博客示例，如果不需要博客功能，请删除)
 * (demoDoc 为参考示例，如果不需要它，请删除)
 */
export default defineCollections([
  // blog,
  // demoDoc,
  frontendBasics,
  frontendVue3,
  frontendProj,
  backendJava,
  backendFramework,
  backendMicroservices,
  backendProj,
  middlewareMq,
  middlewareJob,
  middlewareSearch,
  databaseRDBMS,
  databaseNoSQL,
  opsServer,
  opsCloud,
  opsCICD,
  tool,
  ai,
])
