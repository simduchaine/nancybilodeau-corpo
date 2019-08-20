<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">{{ $page.pageContent.title }}</h1>
        <!-- <g-image class="header-img" :src="$page.pageContent.thumbnail"></g-image> -->
        <div v-html="$page.pageContent.content"></div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Content ($id: String!) {
  pageContent (id: $id) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.pageContent.title
    };
  }
};
</script>

<style lang="scss">
.header-img {
  margin-bottom: 2rem;
}
</style>
