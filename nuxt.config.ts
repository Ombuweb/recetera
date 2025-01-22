// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxthub/core'],
  css: ['~/assets/css/main.css'],
  nitro: {
    database: {
      recetera: {
        connector: 'postgresql',
        options: {
          database: 'recetera',
          host: 'localhost',
          password: 'password',
          port: 543,
        },
      },
    },
  },
});