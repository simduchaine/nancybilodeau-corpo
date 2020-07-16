<template>
  <div class="container section">
    <div v-html="$static.training.content"></div>
  </div>
</template>

<static-query>
query {
  training(path: "/en/training/type/bottom-section") {
    content
  }
}
</static-query>


<script>
export default {
  name: "training_bottom"
};
</script>