---
description: 趣味などで作成したもの一覧
---

<script setup>
import SectionWindow from "./.vitepress/components/SectionWindow.vue";
import Pictures from "./.vitepress/components/Pictures.vue";
</script>

## 開発したもの

*K Chimi* が趣味などで作成したもの。

<SectionWindow>

### Noteput

[ソースコードを見る](https://gitlab.com/k_chimi/noteput)

- **説明**
  - Markdown ベースの短いメモを複数記録するための Web サービス
- **技術スタック**
  - フロントエンドは `TypeScript (Vue / Pinia / Nuxt / ...)` を用いて開発
  - バックエンドは `TypeScript (Fastify / Zod / MikroORM / BullMQ / Tsyringe / ...)` を用いて開発
  - 認証・認可サーバーは `Keycloak` を採用
  - データベースは `Postgres` と `Redis` を採用
- **その他**
  - バックエンドではクリーンアーキテクチャを意識した開発に挑戦
  - フロントエンドでは `marked.js` から `Vue` の `VNode` を生成することでメモの内容を描画

<Pictures>
  <img src="https://gitlab.com/k_chimi/noteput/-/raw/main/docs/screenshot0.png" />
  <img src="https://gitlab.com/k_chimi/noteput/-/raw/main/docs/screenshot1.png" />
  <img src="https://gitlab.com/k_chimi/noteput/-/raw/main/docs/screenshot2.png" />
</Pictures>

</SectionWindow>
<SectionWindow>

### Soy

[ソースコードを見る](https://gitlab.com/k_chimi/soy)

- **説明**
  - `Golang` で実装した最低限の機能を揃えた `Python3` 用のパッケージマネージャーの実装

<Pictures>
  <img src="/soy_screenshot_0.png" />
  <img src="/soy_screenshot_1.png" />
</Pictures>

</SectionWindow>
