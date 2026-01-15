---
home: true
---

<h1><p align="center">
<i>K Chimi</i> のホームページ
</p></h1>

*K Chimi* のホームページへようこそ！

主に `TypeScript (Preact / Vue / Fastify), Golang, Python3` を使ってプログラミングをしています。

エディターは [Helix](https://helix-editor.com/) が好みです。

このウェブサイトは [VitePress](https://vitepress.dev/) という SSG フレームワークを利用しています。

この [ウェブサイトのソースコード](https://gitlab.com/k_chimi/k_chimi.gitlab.io/) は [GitLab](https://gitlab.com) でホスティングされています。

このウェブサイトは [GitLab Pages](https://docs.gitlab.com/user/project/pages/) を利用してデプロイしています。

## 開発したもの一覧

*K Chimi* が趣味などで作成したもの。

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

### Soy

[ソースコードを見る](https://gitlab.com/k_chimi/soy)

- **説明**
  - `Golang` で実装した最低限の機能を揃えた `Python3` 用のパッケージマネージャーの実装
