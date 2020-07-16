<template>
  <English-Layout>
    <featuredImage :image="$page.pageContentEn.thumbnail" :title="$page.pageContentEn.title"></featuredImage>
    <div class="section has-background-info">
      <div class="container">
        <div v-html="$page.pageContentEn.content"></div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query Content ($id: String!) {
  pageContentEn (id: $id) {
    title
    content
    thumbnail (quality: 90, height: 400)
  }
}
</page-query>

<script>
import featuredImage from "../components/featuredImage";

export default {
  metaInfo() {
    return {
      title: this.$page.pageContentEn.title,
      htmlAttrs: {
        lang: "en"
      }
    };
  },
  components: {
    featuredImage
  }
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
