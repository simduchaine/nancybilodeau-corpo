<template>
  <English-Layout>
    <section class="offset-bg-blue section">
      <bio></bio>
    </section>
    <section class="section container">
      <div class="columns">
        <formations></formations>
        <emplois></emplois>
      </div>
    </section>
    <section class="section has-background-info">
      <div class="container">
        <div class="columns">
          <conferences></conferences>
          <articles></articles>
        </div>
      </div>
    </section>
    <section class="section">
      <realisations></realisations>
    </section>
  </English-Layout>
</template>

<script>
import bio from "~/components/en/bio/bio";
import emplois from "~/components/en/bio/emplois";
import formations from "~/components/en/bio/formations";
import conferences from "~/components/en/bio/conferences";
import realisations from "~/components/en/bio/realisations";
import articles from "~/components/en/bio/articles";

export default {
  metaInfo: {
    title: "About",
    htmlAttrs: {
      lang: "en"
    }
  },
  components: {
    bio,
    emplois,
    formations,
    conferences,
    realisations,
    articles
  }
};
</script>

<style lang="scss">
</style>

