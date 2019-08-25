<template>
  <div class="column">
    <h2 class="title">{{ $static.bio.title }}</h2>
    <div v-html="$static.bio.content"></div>
    <ul>
      <li v-for="(item, index) in $static.bio.compagnies" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<static-query>
query {
  bio(path: "/data/bio/emplois") {
    title
    compagnies {
        title
    }
    content
  }
}
</static-query>

<script>
export default {
  name: "Emplois"
};
</script>