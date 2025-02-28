declare module '@nuxthub/core' {
  interface ModuleOptions {
    databaseMigrationsDirs?: string[];
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
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
