<template>
  <div>
    <h1 v-html="$static.conferencesEn.title" class="title"></h1>
    <div v-html="$static.conferencesEn.content" style="margin-bottom:2rem;"></div>
  </div>
</template>

<static-query>
query {
  conferencesEn(path: "/en/conferences/type/lunch-and-learn") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "intro_conferencesEn",
};
</script>