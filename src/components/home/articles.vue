<template>
  <div>
    <div class="card">
      <div class="card-image">
        <g-image :src="thumbnail" height="410" width="650"></g-image>
      </div>
      <div class="card-content">
        <a :href="link" target="_blank"
          ><h2 class="title is-7 has-text-centered">{{ title }}</h2></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ["title", "thumbnail", "content", "link"],
};
</script>
