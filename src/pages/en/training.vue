<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Training</h1>
        <div
          style="margin-bottom:2rem;"
        >I already have several elaborate courses that can be customized to your business needs, both in business and wellness.</div>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="formation in $page.training.edges"
            :key="formation.node.id"
          >
            <div class="card">
              <div class="card-image">
                <g-image :src="formation.node.thumbnail"></g-image>
              </div>
              <div class="card-content">
                <h2 class="title is-6">{{formation.node.title}}</h2>
                <div v-html="formation.node.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </English-Layout>
</template>

<page-query>
query Training {
  training: alltraining (sortBy: "type", order: ASC) {
    edges {
      node {
        title
        id
        content
        path
        link
        thumbnail
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Training",
    htmlAttrs: {
      lang: "en"
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.card-content {
  margin-bottom: auto;
}
</style>