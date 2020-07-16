<template>
  <div class="container section">
    <div v-html="$static.conferencesEn.content"></div>
  </div>
</template>

<static-query>
query {
  conferencesEn(path: "/en/conferences/type/bottom-section") {
    content
  }
}
</static-query>


<script>
export default {
  name: "conferencesEn_bottom"
};
</script>