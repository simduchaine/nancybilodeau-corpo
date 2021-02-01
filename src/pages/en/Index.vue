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
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/nancy-corpo-2.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Meet Your Health & Happiness Guide</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >Because there is no limit to performance when people are healthy and happy</h2>
              <a
                href="https://nancybilodeau.com/en/about"
                class="button"
              >Find out more about me</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/team.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Get your team more than engaged</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >Get them to lead the way to where you want to go</h2>
              <a
                href="https://nancybilodeau.com/en/services"
                class="button"
              >Discover my Consulting Services</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/velo-guy.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Create a culture of Health and Happiness</h1>
              <h2 class="title is-size-3 is-family-primary">When they know you care, they care!!!!</h2>
              <a
                href="https://cours.nancybilodeau.com/programmemieuxetre"
                class="button"
              >Ask for my Wellness at Work Training Program</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/escalade.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Nurture human values</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >So that your people are at ease and can contribute their best talents</h2>
              <a
                href="https://cours.nancybilodeau.com/officewellnessrescue"
                class="button"
              >Help your employees with COVID-19</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/zipline.jpg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Help your people to find their balance</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >So that they can reach their full potential</h2>
              <a
                href="https://nancybilodeau.com/en/contact"
                class="button"
              >Contact me to find out my approach</a>
            </div>
          </div>
        </div>
        <div>
          <g-image class="hero-background is-transparent" src="../../../uploads/heart-dark.jpeg" />
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-size-2">Lead with the heart’s intelligence</h1>
              <h2
                class="title is-size-3 is-family-primary"
              >Move beyond traditional management to coaching for greatness</h2>
              <a
                href="https://www.linkedin.com/pulse/quest-ce-que-la-cohérence-cardiaque-nancy-bilodeau-mba/"
                class="button"
              >Learn more about Heart Coherence</a>
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
    VueSlickCarousel,
  },
};
</script>



