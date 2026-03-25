---
description: 最近の記事一覧
---

<script setup>
import { data as posts } from "./.vitepress/datas/posts.data.ts";
</script>

## 最近の記事

<template v-for="post in posts">
	<a class="article-link" :href="post.url">
		<article class="article-thumbnail">
			<h1>
				{{ post.frontmatter.title || post.url }}
			</h1>
			<p>
				{{ post.frontmatter.description }}
			</p>
		</article>
	</a>
</template>

<style scoped>
.article-link {
	text-decoration: none;
	color: inherit;
}

.article-thumbnail {
	padding: 1rem;

	position: relative;

	h1 {
		font-size: 1.25rem;
		margin: 0;
	}
	
	--border-delta: 0;

	&:hover {
		--border-delta: 0.1;
	}

	&::before {
		display: block;
		content: '';
		
		position: absolute;
		top: calc(-0.25rem - 1rem * var(--border-delta));
		left: calc(-0.25rem - 1rem * var(--border-delta));
		
		border: solid 1px black;

		width: 100%;
		height: 100%;
		
	    transition: top 0.15s ease-out, left 0.15s ease-out;
	}

	&::after {
		display: block;
		content: '';
		
		position: absolute;
		top: calc(0.25rem + 1rem * var(--border-delta));
		left: calc(0.25rem + 1rem * var(--border-delta));
		
		border: solid 1px black;

		width: 100%;
		height: 100%;
		
	    transition: top 0.15s ease-out, left 0.15s ease-out;
	}
}
</style>
