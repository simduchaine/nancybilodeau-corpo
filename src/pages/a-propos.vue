<template>
  <Layout>
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
  </Layout>
</template>

<script>
import bio from "~/components/bio/bio";
import emplois from "~/components/bio/emplois";
import formations from "~/components/bio/formations";
import conferences from "~/components/bio/conferences";
import realisations from "~/components/bio/realisations";
import articles from "~/components/bio/articles";

export default {
  metaInfo: {
    title: "À Propos"
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

