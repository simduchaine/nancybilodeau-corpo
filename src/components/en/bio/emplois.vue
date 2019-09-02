<template>
  <div class="column">
    <h2 class="title">{{ $static.bioEn.title }}</h2>
    <div v-html="$static.bioEn.content"></div>
    <ul>
      <li v-for="(item, index) in $static.bioEn.compagnies" :key="index">{{ item.title }}</li>
    </ul>
  </div>
</template>

<static-query>
query {
  bioEn(path: "/data-en/bio/employers") {
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
  name: "Employers"
};
</script>