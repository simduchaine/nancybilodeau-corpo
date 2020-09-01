<template>
  <div>
    <featuredImage :image="$static.pageContentEn.thumbnail" :title="$static.pageContentEn.title"></featuredImage>
    <div class="section has-background-info">
      <div class="container">
        <div v-html="$static.pageContentEn.content"></div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  pageContentEn(path: "/data-en/pages/services") {
    title
    content
    thumbnail
  }
}
</static-query>

<script>
import featuredImage from "../../featuredImage";

export default {
  name: "content-services",
  components: {
    featuredImage,
  },
};
</script>