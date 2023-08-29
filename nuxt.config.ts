// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins: [
    { src: '~/plugins/vue-awesome-paginate', ssr: false }
  ],
  devtools: { enabled: true }
})
