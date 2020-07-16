<template>
  <div class="container section">
    <div v-html="$static.conferences.content"></div>
  </div>
</template>

<static-query>
query {
  conferences(path: "/conferences/type/section-du-bas") {
    content
  }
}
</static-query>


<script>
export default {
  name: "conferences_bottom"
};
</script>