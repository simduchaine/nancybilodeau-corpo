<template>
  <div>
    <h1 v-html="$static.formations.title" class="title"></h1>
    <div v-html="$static.formations.content" style="margin-bottom:2rem;"></div>
  </div>
</template>

<static-query>
query {
  formations(path: "/formations/type/formations") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "intro_formations"
};
</script>