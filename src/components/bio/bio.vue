<template>
  <div class="container bio">
    <h1 class="title">{{ $static.bio.title }}</h1>
    <g-image class="image is-right" :src="$static.bio.thumbnail"></g-image>
    <div v-html="$static.bio.content"></div>
    <a :href="$static.bio.cv_link.src" class="button" download>Télécharger mon CV</a>
  </div>
</template>

<static-query>
query {
  bio(path: "/data/bio/bio") {
    id
    title
    content
    thumbnail (quality: 90, height: 800, width: 700)
    cv_link
  }
}
</static-query>

<script>
export default {
  name: "Bio"
};
</script>