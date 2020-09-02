<template>
  <home-layout>
    <section id="Magnet" style="background-color:#f1f0f0">
      <Magnet></Magnet>
    </section>
    <section id="mission-vision" class="section">
      <mission-vision></mission-vision>
    </section>
    <section id="lead" class="has-background-info lead-content">
      <lead></lead>
    </section>
    <section id="call-to-action">
      <call-action></call-action>
    </section>
    <section id="main">
      <main-content class="has-background-info lead-content" style="margin-top: -10px"></main-content>
    </section>
    <section id="consultation">
      <consultation></consultation>
    </section>
    <section id="articles" class="has-background-info lead-content">
      <div class="container">
        <h1 class="title has-text-centered">Articles à la une</h1>
        <div class="columns is-multiline">
          <articles
            v-for="article in $page.articles.edges"
            :key="article.node.id"
            :title="article.node.title"
            :content="article.node.content"
            :thumbnail="article.node.thumbnail"
            :link="article.node.link"
            class="column is-third"
          ></articles>
        </div>
        <a href="/blogue/" class="button">Plus d'articles</a>
      </div>
    </section>
  </home-layout>
</template>

<page-query>
query Articles {
  articles: allarticles (filter: {sticky: {eq: true}}) {
    edges {
      node {
        title
        id
        content
        path
        thumbnail (quality: 90, width: 678, height: 410)
        link
      }
    }
  }
}
</page-query>

<script>
import lead from "~/components/home/Lead.vue";
import callAction from "~/components/home/call-to-action.vue";
import mainContent from "~/components/home/Main.vue";
import consultation from "~/components/home/consultation.vue";
import missionVision from "~/components/home/mission-vision.vue";
import Magnet from "~/components/home/Magnet.vue";
import articles from "~/components/home/articles.vue";

export default {
  metaInfo: {
    title: "Accueil",
  },
  components: {
    lead,
    callAction,
    mainContent,
    consultation,
    missionVision,
    Magnet,
    articles,
  },
};
</script>

<style lang="scss">
.button {
  border-radius: 5px;
}

.title {
  line-height: 1.325;

  a {
    color: #004369;
    //color: #d05208;
    text-decoration: underline;

    .navbar-item.active--exact.active {
      background-color: #fafafa;
      color: #004369;
      //color: #d05208;
    }

    &:hover {
      color: inherit;
    }
  }
}

a {
  &:not(.button):not(.navbar-item) {
    font-style: italic;
  }
}

ul {
  li {
    list-style-type: circle;
    list-style-position: outside;
    margin-left: 1em;
  }
}

blockquote {
  position: relative;
  padding-left: 0.5em;
  font-style: italic;
  border-left: 0.14em solid #3b3049;
  margin-bottom: 1.5rem;
  p {
    padding: 0;
    display: inline;
  }
  &:before,
  &:after {
    content: "\201C";
    color: #3b3049;
  }
  &:after {
    content: "\201D";
  }
}

.reverse-row-order {
  flex-direction: row-reverse;
}

.is-right {
  padding: 0px 1rem 1rem;
  float: right;
}

.self_center {
  margin: 0.8rem 0.5rem;
  display: inline-block;
}

.offset-bg-blue {
  background-image: linear-gradient(transparent 9rem, #c4e0ec80 0);
  //margin-bottom: 2rem;
}

.brands {
  a {
    color: #929292;
    //color: #3b3049;
    &:hover {
      color: #004369;
      //color: #d05208;
    }
  }
}

.navbar-dropdown {
  max-width: 100%;
}

#services {
  > .columns:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
  }

  /* .columns {
    max-height: 689px;
  } */
}

@media screen and (min-width: 768px) {
  .lead-content {
    padding: 5rem;
  }
}
</style>

