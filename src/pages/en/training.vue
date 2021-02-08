<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <intro></intro>
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
                <a :href="formation.node.link">Register ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-cta></bottom-cta>
  </English-Layout>
</template>

<page-query>
query Training {
  training: alltraining (filter: { path: { nin: ["/en/training/type/training", "/en/training/type/bottom-section"] }}, sortBy: "type", order: ASC) {
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
import intro from "~/components/en/training/intro.vue";
import bottomCta from "~/components/en/training/bottom_cta.vue";

export default {
  metaInfo: {
    title: "Training",
    htmlAttrs: {
      lang: "en"
    }
  },
  components: {
    intro,
    bottomCta
  }
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