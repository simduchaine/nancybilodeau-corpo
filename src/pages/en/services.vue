<template>
  <English-Layout>
    <mainContent></mainContent>

    <section id="linkedIn">
      <div class="container" style="padding: 3rem 0;">
        <h1 class="title is-size-5">Références</h1>
        <hr />
        <div v-for="reference in $page.linkedin.edges" :key="reference.node.id">
          <div>
            <div v-html="reference.node.content"></div>
            <h2 class="title is-size-6">{{ reference.node.title }}, {{ reference.node.company }}</h2>
            <hr />
          </div>
        </div>
        <p>
          Pour plus de références, accédez à mon profile sur LinkedIn :
          <a
            href="https://www.linkedin.com/in/nancybilodeau/"
          >https://www.linkedin.com/in/nancybilodeau/</a>
        </p>
      </div>
    </section>
  </English-Layout>
</template>

<page-query>
query {
  linkedin: alllinkedInEn {
    edges {
      node {
        title
        company
        content
      }
    }
  }
}

</page-query>

<script>
import mainContent from "../../components/en/services/mainContent";

export default {
  metaInfo: {
    title: "Services",
  },
  components: {
    mainContent,
  },
};
</script>