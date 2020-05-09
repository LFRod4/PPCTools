<template>
  <section class="hero is-medium">
    <img src="@/assets/img/bg/shapes/blue-waves.png" class="waves" />
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <img class="logo" src="@/assets/img/logos/bradynce-logo.png" />

            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="level">
        <NavHeader v-if="step != 1" class="level-item"></NavHeader>
      </div>
      <div class="container has-text-centered">
        <!-- Each step of analysis -->
        <div class="steps">
          <Welcome v-if="step == 1"></Welcome>
          <div class="box" v-if="step != 1">
            <Goals v-if="step == 2"></Goals>
            <Formula v-if="step == 3"></Formula>
            <Analysis v-if="step == 4"></Analysis>
            <Contact v-if="step == 5"></Contact>
            <ThankYou v-if="step == 6"></ThankYou>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Formula from "@/components/Formula.vue";
import Goals from "@/components/Goals.vue";
import NavHeader from "@/components/NavHeader.vue";
import Welcome from "@/components/Welcome.vue";
import Analysis from "@/components/Analysis.vue";
import Contact from "@/components/Contact.vue";
import ThankYou from "@/components/ThankYou.vue";

import { mapState } from "vuex";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Welcome,
    Formula,
    Goals,
    NavHeader,
    Analysis,
    Contact,
    ThankYou
  },
  data() {
    return {};
  },
  methods: {
    nextStep() {
      this.$store.dispatch("nextStep");
    }
  },
  computed: {
    ...mapState(["step", "modal"])
  }
};
</script>

<style>
.waves {
  position: absolute;
  top: 0;
}

.logo {
  max-width: 170px !important;
  height: 100px;
}

.hero {
  min-height: 100vh;
}

.hero-body {
  padding-top: 5rem !important;
}

.box {
  padding: 3rem;
}
</style>
