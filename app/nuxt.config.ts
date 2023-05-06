// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [ '~/assets/styles.css'],
    modules: [
        [
          '@pinia/nuxt',
          {
            autoImports: ['defineStore', 'acceptHMRUpdate'],
          },
        ],
      ]
   }
)