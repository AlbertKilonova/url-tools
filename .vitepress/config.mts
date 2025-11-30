import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "实用网站整合",
  description: "致力于收集实用网站喵",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/NootFond/url-tools/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '公告', link: '/announcements' },
      { text: '网站列表', link: '/sites/' },
      {
        text: '关于',
        items: [
          { text: '关于本站', link: '/about' },
          { text: '帮助修改', link: '/help-us' },
          { text: '贡献者们', link: '/contributors' }
        ]
      }
    ],

    sidebar: [
      {
        text: '公告',
        items: [
          { text: '📢 公告发布', link: '/announcements' }
        ]
      },
      {
        text: '网站们',
        items: [
          { text: '总览', link: '/sites/' },
          { text: '🎨 素材与资源', link: '/sites/resource' },
          { text: '🎵 音乐学习', link: '/sites/music' },
          { text: '🎮 休闲娱乐', link: '/sites/entertainment' },
          { text: '🛠️ 在线工具', link: '/sites/tools' },
          { text: '👤 个人与推荐', link: '/sites/personal' }
        ]
      },
      {
        text: '关于本站',
        items: [
          { text: '关于', link: '/about' },
          { text: '帮助修改', link: '/help-us' },
          { text: '贡献者们', link: '/contributors' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © ${new Date().getFullYear()} NootFond`
    }
  }
})
