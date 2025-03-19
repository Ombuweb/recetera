declare module '@nuxthub/core' {
  interface ModuleOptions {
    databaseMigrationsDirs?: string[];
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  nitro: {
    experimental: {
      openAPI: true,
    },
    openAPI: {
      meta: {
        title: 'Recetera RESTful API',
        description: 'Recetera is a recipe sharing platform for foodies.',
        version: '1.0.0',
      },
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxt/test-utils/module', '@nuxt/ui', '@nuxthub/core'],
  css: ['~/assets/css/main.css'],
  hub: {
    database: true,
    databaseMigrationsDirs: ['./server/utils/database/sql/migrations'],
  },
});
