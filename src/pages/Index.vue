<template>
  <home-layout>
    <section id="carousel">
      <VueSlickCarousel
        class="hero is-medium has-background"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
      >
        <div v-for="slide in $page.slides.edges" :key="slide.node.id">
          <g-image
            class="hero-background is-transparent"
            :src="slide.node.backgroundImg"
          />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">{{ slide.node.title }}</h1>
              <h2 class="title is-size-3 is-family-primary">
                {{ slide.node.subtitle }}
              </h2>
              <a :href="slide.node.buttonLink" class="button">
                {{ slide.node.buttonText }}
              </a>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </section>

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
      <main-content
        class="has-background-info lead-content"
        style="margin-top: -10px"
      ></main-content>
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
            :thumbnail="article.node.thumbnail"
            :link="article.node.link"
            class="column is-third"
          ></articles>
        </div>
        <a href="/blogue/">Plus d'articles ></a>
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
        path
        thumbnail (quality: 90, width: 678, height: 410)
        link
      }
    }
  },
  slides: allcarousel(sortBy: "order", order: ASC) {
    edges {
      node {
        title
        subtitle
        path
        backgroundImg (quality: 100)
        buttonText
        buttonLink
        id
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

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title:
      "Services conseils holistiques en entreprises et coaching individuel pour employés et gestionnaires",
    meta: [
      {
        name: "description",
        content:
          "J'assiste les entreprises à atteindre leurs objectifs par l'établissement d'un milieu de travail vibrant où tous prennent soin de leur santé et de leur attitude en pleine conscience, pour apporter le meilleur d'eux même et contribuer au succès de l'entreprise.",
      },
    ],
  },
  components: {
    lead,
    callAction,
    mainContent,
    consultation,
    missionVision,
    Magnet,
    articles,
    VueSlickCarousel,
  },
};
</script>

<style lang="scss">
.hero {
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100vh;

    &.is-transparent {
      opacity: 0.7;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 8.5rem;
      padding-top: 8.5rem;
    }
  }
}

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

#carousel,
#carouselEn {
  .button {
    margin-top: 2.5rem;
  }

  .title {
    color: #004369;
    line-height: 0.9;
  }

  .slick-arrow {
    z-index: 999;
  }
  .slick-prev {
    left: 20px;
  }
  .slick-next {
    right: 20px;
  }
  .slick-slide {
    position: relative;
  }

  .slick-dots {
    bottom: 20px;
  }
}
</style>
