<template>
  <Layout>
    <div class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Conferences</h1>
        <div style="margin-bottom:2rem;">
          Investing in employees’knowledge is one of the most powerful levers for a company's performance. The healthier and proper role fit, the more your employee will be able to contribute to the success of your company.
          Nancy has several midi conferences developed and can customize them to your needs.
        </div>
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
  </Layout>
</template>

<page-query>
query Conferences {
  conferences: allconferences (sortBy: "type", order: ASC) {
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
    title: "Conférence-Midi"
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