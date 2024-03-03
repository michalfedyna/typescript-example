// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devtools: { enabled: false },
});
