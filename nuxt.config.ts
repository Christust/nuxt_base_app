// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', "@nuxtjs/tailwindcss"],
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },

  devtools: { enabled: true },
  css: ['~/assets/scss/index.scss']
})