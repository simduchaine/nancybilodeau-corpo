<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.pageContentEn.title }}</h1>
        <g-image class="header-img" :src="$page.pageContentEn.thumbnail"></g-image>
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
export default {
  metaInfo() {
    return {
      title: this.$page.pageContent.title,
      htmlAttrs: {
        lang: "en"
      }
    };
  }
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
