<template>
  <Layout>
    <div v-for="edge in $page.allbio.edges" :key="edge.node.id">
      <section class="offset-bg-blue section">
        <div class="container bio">
          <h1 class="title">{{ edge.node.title }}</h1>
          <g-image class="image is-right" :src="edge.node.thumbnail"></g-image>
          <div v-html="edge.node.content"></div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query allBio {
  allbio {
    edges {
      node {
        id
        title
        content
        thumbnail (quality: 90, height: 800, width: 700)
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "À Propos"
  },
  components: {}
};
</script>

<style lang="scss">
</style>

