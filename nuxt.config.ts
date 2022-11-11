// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    // typeCheck: true, TODO: @nuxt/ui でエラーになる
  },
  modules: [
    '@nuxt/ui'
  ],
})
