<template>
  <div>
    <h1 v-html="$static.training.title" class="title"></h1>
    <div v-html="$static.training.content" style="margin-bottom:2rem;"></div>
  </div>
</template>

<static-query>
query {
  training(path: "/en/training/type/training") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "intro_formations_en"
};
</script>