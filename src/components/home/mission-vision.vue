<template>
  <div class="container">
    <div class="columns">
      <div class="column" v-for="edge in $static.allhome.edges" :key="edge.node.id">
        <h2 class="title is-5">{{edge.node.title}}</h2>
        <p v-html="edge.node.content"></p>
      </div>
    </div>
  </div>
</template>

<static-query>
query MissionVision {
  allhome(filter: { path: { in: ["/data/home/mission", "/data/home/vision"] }}) {
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