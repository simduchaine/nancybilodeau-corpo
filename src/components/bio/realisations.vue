<template>
  <div class="container">
    <h2 class="title">{{ $static.bio.title }}</h2>
    <div v-html="$static.bio.content"></div>
  </div>
</template>

<static-query>
query {
  bio(path: "/data/bio/realisations") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Realisations"
};
</script>