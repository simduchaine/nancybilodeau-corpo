<template>
  <div>
    <h1 v-html="$static.conferences.title" class="title"></h1>
    <div v-html="$static.conferences.content" style="margin-bottom:2rem;"></div>
  </div>
</template>

<static-query>
query {
  conferences(path: "/conferences/type/conferences") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "intro_conferences",
};
</script>