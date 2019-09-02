<template>
  <div class="container">
    <div class="columns">
      <div class="column" v-for="edge in $static.allhomeEn.edges" :key="edge.node.id">
        <h2 class="title is-5">{{edge.node.title}}</h2>
        <p v-html="edge.node.content"></p>
      </div>
    </div>
  </div>
</template>

<static-query>
query MissionVision {
  allhomeEn(filter: { path: { in: ["/data-en/home/mission", "/data-en/home/vision"] }}) {
      edges {
          node {
            id
            title
            content
          }
      }
  }
}
</static-query>

<script>
export default {
  name: "missionVision"
};
</script>