<template>
  <div>
    <div class="container">
      <div class="columns is-marginless">
        <div class="column is-half">
          <h1 v-html="$static.homeEn.title" class="title"></h1>
          <div v-html="$static.homeEn.definition"></div>
        </div>
        <div class="column"></div>
        <div class="column is-half" v-html="$static.homeEn.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  homeEn(path: "/data-en/home/holistic-coaching") {
    title
    content
    definition
  }
}
</static-query>

<script>
export default {
  name: "Main"
};
</script>