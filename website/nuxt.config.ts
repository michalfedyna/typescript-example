// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-icon", "@nuxtjs/google-fonts", "@nuxt/content", "@nuxtjs/tailwindcss"],
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Fira Mono": [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    prefetch: true,
  },
  content: {
    markdown: {
      toc: {
        depth: 2,
        searchDepth: 2,
      },
      anchorLinks: true,
    },
    highlight: {
      theme: "material-theme",
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  devtools: { enabled: false },
});
