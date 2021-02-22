<template>
  <Enhome>
    <section id="carouselEn">
      <VueSlickCarousel
        class="hero is-medium has-background"
        :dots="true"
        :autoplay="true"
        :autoplaySpeed="5000"
        :arrows="true"
      >
       
       <div v-for="slide in $page.slides.edges" :key="slide.node.id">
          <g-image class="hero-background is-transparent" :src="slide.node.backgroundImg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">{{ slide.node.title }}</h1>
              <h2 class="title is-size-3 is-family-primary">{{ slide.node.subtitle }}</h2>
              <a :href="slide.node.buttonLink" class="button">
                {{
                slide.node.buttonText
                }}
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
      <main-content class="has-background-info lead-content" style="margin-top: -10px"></main-content>
    </section>
    <section id="consultation">
      <consultation></consultation>
    </section>
  </Enhome>
</template>

<page-query>
query CarouselEn {
 slides: allcarouselEn {
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
import lead from "~/components/en/home/Lead.vue";
import callAction from "~/components/en/home/call-to-action.vue";
import mainContent from "~/components/en/home/Main.vue";
import consultation from "~/components/en/home/consultation.vue";
import missionVision from "~/components/en/home/mission-vision.vue";
import Magnet from "~/components/en/home/Magnet.vue";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  metaInfo: {
    title: "Coaching and holistic consulting for companies and individuals",
    meta: [
      { name: 'description', content: "I help companies achieve their goals, manage projects, improve processes, reduce conflict and build a healthy workplace based on sustainable human values. I also help individuals achieve optimal wellness and fulfill themselves." },
    ],
    htmlAttrs: {
      lang: "en",
    },
  },
  components: {
    lead,
    callAction,
    mainContent,
    consultation,
    missionVision,
    Magnet,
    VueSlickCarousel
  },
};
</script>



