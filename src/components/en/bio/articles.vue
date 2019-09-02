<template>
  <div class="column">
    <h2 class="title">{{ $static.bioEn.title }}</h2>
    <div v-html="$static.bioEn.content"></div>
  </div>
</template>

<static-query>
query {
  bioEn(path: "/data-en/bio/articles") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Articles"
};
</script>