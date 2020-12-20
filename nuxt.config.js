export default {
  components: true,
  head: {
    titleTemplate: "NuxtBNB | %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["bnb-main"]
    },
    meta: [{
      charset: "utf-8"
    }]
  },
  router: {
    prefetchLinks: false,
  }
}