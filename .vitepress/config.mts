import { defineConfig, HeadConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "ja-jp",
  title: "K Chimi Homepage",
  description: "K Chimi のホームページ",
  head: [
    ["link", { rel: "icon", href: "/icon.svg" }],
    ["meta", { name: "robots", content: "noindex" }],
  ],
  markdown: {
    theme: {
      light: "github-dark-default",
      dark: "github-dark-default"
    },
  },
  transformHead({ pageData }) {
      const res: HeadConfig[] = [];

      const graph = pageData["@graph"];

      if (Array.isArray(graph) && graph.length > 0) {
        res.push(["script", { type: "application/ld+json" }, JSON.stringify({
          "@graph": graph
        })]);
      }

      return res;
  },
  transformPageData(pageData) {
    const res: unknown[] = [...pageData.frontmatter["@graph"] ?? []];

    if (pageData.filePath.includes("posts")) {
      res.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageData.title ?? pageData.description,
        "description": pageData.description,
        "datePublished": pageData.frontmatter.published ? new Date(pageData.frontmatter.published) : undefined
      })
    }

    return { "@graph": res };
  },
})
