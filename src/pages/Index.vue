<template>
  <home-layout>
    <section id="lead" class="has-background-info lead-content">
      <lead></lead>
    </section>
    <section id="main">
      <main-content></main-content>
    </section>
  </home-layout>
</template>

<script>
import lead from "~/components/home/Lead.vue";
import mainContent from "~/components/home/Main.vue";

export default {
  metaInfo: {
    title: "Coaching pour entreprises"
  },
  components: {
    lead,
    mainContent
  }
};
</script>

<style lang="scss">
.button {
  border-radius: 5px;
}

.title {
  line-height: 1.325;

  a {
    color: #d05208;
    text-decoration: underline;

    .navbar-item.active--exact.active {
      background-color: #fafafa;
      color: #d05208;
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
    list-style-position: inside;
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
  background-image: linear-gradient(transparent 9rem, #c4e0ec 0);
  //margin-bottom: 2rem;
}

.brands {
  a {
    color: #3b3049;
    &:hover {
      color: #d05208;
    }
  }
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

