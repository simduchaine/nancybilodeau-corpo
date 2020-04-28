<template>
  <Layout>
    <div>
      <section class="container section">
        <h2 class="title is-5">Articles</h2>

        <div class="columns is-multiline">
          <div
            class="column is-half"
            v-for="article in $page.articles.edges"
            :key="article.node.id"
          >
            <div class="card">
              <div class="card-image">
                <g-image :src="article.node.thumbnail" height="410" width="650"></g-image>
              </div>
              <div class="card-content">
                <h2 class="title is-6">{{article.node.title}}</h2>
                <div v-html="article.node.content"></div>
              </div>
              <a :href="article.node.link" target="_blank">Lire plus ></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<page-query>
query Articles {
  articles: allarticles (sortBy: "order", order: ASC) {
    edges {
      node {
        title
        id
        content
        path
        thumbnail (quality: 90, width: 678, height: 410)
        link
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Articles"
  },
  components: {}
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  a {
    padding-left: 1.5rem;
    padding-bottom: 0.5rem;
  }
}
.card-content {
  margin-bottom: auto;
}
</style>