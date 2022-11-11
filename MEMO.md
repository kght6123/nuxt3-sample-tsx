# セットアップメモ

https://v3.nuxtjs.org/getting-started/installation

VS Codeに拡張をインストール

```
名前: Vue Language Features (Volar)
ID: Vue.volar
説明: Language support for Vue 3
バージョン: 1.0.9
パブリッシャー: Vue
VS Marketplace リンク: https://marketplace.visualstudio.com/items?itemName=Vue.volar
```

```
名前: TypeScript Vue Plugin (Volar)
ID: Vue.vscode-typescript-vue-plugin
説明: Vue Plugin for TypeScript server
バージョン: 1.0.9
パブリッシャー: Vue
VS Marketplace リンク: https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin
```

プロジェクトを作成する

```sh
npx nuxi init nuxt-app-tsx
cd nuxt-app-tsx
code-insiders .
npm install
npm run dev
```

TypeScriptを試す

https://vuejs.org/guide/typescript/composition-api.html
https://v3.nuxtjs.org/concepts/typescript

TSXを試す

https://v3.nuxtjs.org/examples/advanced/jsx/
https://vuejs.org/guide/extras/render-function.html#jsx-tsx

Testを試す

https://v3.nuxtjs.org/examples/advanced/testing
https://vuejs.org/guide/scaling-up/testing.html#unit-testing

useFetch + auto-typed endpointsを試す（APIの型が自動補完される）
https://twitter.com/youyuxi/status/1568013957914558464

ISRを試す
https://zenn.dev/coedo/articles/cc000738a0f069#（追記）-isr-の実装例

