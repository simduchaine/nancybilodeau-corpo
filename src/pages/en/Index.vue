<template>
  <Enhome>
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
    missionVision,
    Magnet
  }
};
</script>



