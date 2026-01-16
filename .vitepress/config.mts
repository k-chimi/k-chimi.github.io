import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "K Chimi Homepage",
  description: "K Chimi のホームページ",
  head: [
    ["link", { rel: "icon", href: "/icon.svg" }],
    ["meta", { name: "robots", content: "noindex" }]
  ]
})
