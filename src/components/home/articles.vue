<template>
  <div>
    <div class="card">
      <div class="card-image">
        <g-image :src="thumbnail" height="410" width="650"></g-image>
      </div>
      <div class="card-content">
        <h2 class="title is-6">{{ title }}</h2>
        <div v-html="content"></div>
      </div>
      <a :href="link" target="_blank" style="padding:1.5rem;">Lire plus ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ["title", "thumbnail", "content", "link"],
};
</script>
