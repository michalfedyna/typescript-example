// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-monaco-editor"],
  ssr: false,
  css: ["~/assets/css/main.css"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devtools: { enabled: true },
});
