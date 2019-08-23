<template>
  <div>
    <div class="container">
      <div class="columns is-marginless">
        <div class="column is-half">
          <h1 v-html="$static.home.title" class="title"></h1>
          <div v-html="$static.home.definition"></div>
        </div>
        <div class="column"></div>
        <div class="column is-half" v-html="$static.home.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  home(path: "/data/home/coaching-holistique") {
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