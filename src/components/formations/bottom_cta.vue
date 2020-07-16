<template>
  <div class="container section">
    <div v-html="$static.formations.content"></div>
  </div>
</template>

<static-query>
query {
  formations(path: "/formations/type/section-du-bas") {
    content
  }
}
</static-query>


<script>
export default {
  name: "formations_bottom"
};
</script>