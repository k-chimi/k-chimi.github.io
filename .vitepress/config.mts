import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja-jp",
  title: "K Chimi Homepage",
  description: "K Chimi のホームページ",
  head: [
    ["link", { rel: "icon", href: "/icon.svg" }],
    ["meta", { name: "robots", content: "noindex" }]
  ]
})
