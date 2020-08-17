<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <intro></intro>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="conference in $page.conferences.edges"
            :key="conference.node.id"
          >
            <div class="card">
              <div class="card-image">
                <g-image :src="conference.node.thumbnail"></g-image>
              </div>
              <div class="card-content">
                <h2 class="title is-6">{{conference.node.title}}</h2>
                <div v-html="conference.node.content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-cta></bottom-cta>
  </Layout>
</template>

<page-query>
query Conferences {
  conferences: allconferences (filter: { path: { nin: ["/conferences/type/conferences", "/conferences/type/section-du-bas"] }}, sortBy: "type", order: ASC) {
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
import intro from "~/components/conferences/intro.vue";
import bottomCta from "~/components/conferences/bottom_cta";
export default {
  metaInfo: {
    title: "Conférences",
  },
  components: {
    bottomCta,
    intro,
  },
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