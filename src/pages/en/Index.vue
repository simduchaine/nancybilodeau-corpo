<template>
  <Enhome>
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
    <section id="mission-vision" class="section has-background-info">
      <mission-vision></mission-vision>
    </section>
  </Enhome>
</template>

<script>
import lead from "~/components/en/home/Lead.vue";
import callAction from "~/components/en/home/call-to-action.vue";
import mainContent from "~/components/en/home/Main.vue";
import consultation from "~/components/en/home/consultation.vue";
import missionVision from "~/components/en/home/mission-vision.vue";

export default {
  metaInfo: {
    title: "Home",
    htmlAttrs: {
      lang: "en"
    }
  },
  components: {
    lead,
    callAction,
    mainContent,
    consultation,
    missionVision
  }
};
</script>



