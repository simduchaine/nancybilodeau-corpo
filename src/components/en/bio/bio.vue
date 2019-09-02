<template>
  <div class="container bio">
    <h1 class="title">{{ $static.bioEn.title }}</h1>
    <g-image class="image is-right" :src="$static.bioEn.thumbnail"></g-image>
    <div v-html="$static.bioEn.content"></div>
    <a :href="$static.bioEn.cv_link.src" class="button" download>Download My Resume</a>
  </div>
</template>

<static-query>
query {
  bioEn(path: "/data-en/bio/bio") {
    id
    title
    content
    thumbnail (quality: 90, width: 700)
    cv_link
  }
}
</static-query>

<script>
export default {
  name: "Bio"
};
</script>