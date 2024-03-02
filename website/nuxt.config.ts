// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    resolve: {
      //preserveSymlinks: true,
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devtools: { enabled: true },
});
