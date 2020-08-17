<template>
  <English-Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <intro></intro>
        <div class="columns is-multiline">
          <div
            class="column is-one-third"
            v-for="conference in $page.conferencesEn.edges"
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
  </English-Layout>
</template>

<page-query>
query Conferences {
  conferencesEn: allconferencesEn (filter: { path: { nin: ["/en/conferences/type/lunch-and-learn", "/en/conferences/type/bottom-section"] }}, sortBy: "type", order: ASC) {
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
import bottomCta from "~/components/en/conferences/bottom_cta.vue";
import intro from "~/components/en/conferences/intro.vue";

export default {
  metaInfo: {
    title: "Conferences",
    htmlAttrs: {
      lang: "en",
    },
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