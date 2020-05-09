<template>
  <div class="container">
    <div class="business-content">
      <div class="welcome is-size-1 black-text">Welcome</div>
      <div
        class="sub-text is-size-3 black-text"
      >Understanding your return on PPC investments is important</div>
      <div class="columns is-marginless">
        <div class="column is-7">
          <div class="left-content">
            <div class="sub-text is-size-3">At the end of this module you'll learn:</div>
            <ul class="is-size-4 light-black">
              <li>What's a good marketing budget</li>
              <li>How to align business goals with PPC efforts</li>
              <li>What PPC can do for your business profits</li>
            </ul>
          </div>
        </div>
        <div class="column">
          <img src="@/assets/img/illustrations/drawings/landing5-1.svg" />
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
    <button class="button" @click="nextStep()">Get Started</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Welcome",
  data() {
    return {};
  },
  methods: {
    nextStep() {
      this.$store.dispatch("nextStep");
    }
  },
  computed: {
    ...mapState(["step"])
  }
};
</script>

<style scoped>
.term-input {
  width: 400px;
}

.business-content {
  text-align: left;
}

ul {
  margin-top: 10px;
}

ul li {
  margin-left: 40px;
  list-style-type: disc;
}

.welcome {
  margin-top: -40px;
}

img {
  width: 370px;
}

.left-content {
  margin-top: 90px;
  padding-left: 30px;
}

button {
  margin-top: -40px;
}
</style>