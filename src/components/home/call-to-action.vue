<template>
  <div class="columns is-marginless is-vcentered">
    <div class="column is-paddingless">
      <g-image :src="$static.home.thumbnail" style="width:100%" />
    </div>
    <div class="column is-paddingless">
      <div class="column is-three-fifths is-offset-one-fifth">
        <h1 v-html="$static.home.title" class="title"></h1>
        <div v-html="$static.home.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home(path: "/data/home/call-to-action") {
    title
    content
    thumbnail (quality: 100, height: 680, width: 940)
  }
}
</static-query>

<script>
export default {
  name: "CTA"
};
</script>