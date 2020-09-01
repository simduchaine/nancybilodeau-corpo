<template>
  <div>
    <featuredImage :image="$static.pageContent.thumbnail" :title="$static.pageContent.title"></featuredImage>
    <div class="section has-background-info">
      <div class="container">
        <div v-html="$static.pageContent.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  pageContent(path: "/data/pages/services") {
    title
    content
    thumbnail
  }
}
</static-query>

<script>
import featuredImage from "../../components/featuredImage";

export default {
  name: "content-services",
  components: {
    featuredImage,
  },
};
</script>