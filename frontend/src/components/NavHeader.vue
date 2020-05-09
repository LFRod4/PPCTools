<template>
  <div id="nav" aria-label="breadcrumbs" class="navbar breadcrumb has-succeeds-separator">
    <ul>
      <li>
        <a class="nav-item light-grey">Welcome</a>
      </li>
      <li>
        <a
          class="nav-link nav-item light-grey"
          @click="changeStep(2)"
          :class="{'bold-weight' : step == 2}"
        >Goals</a>
      </li>
      <li>
        <a
          class="nav-link nav-item light-grey"
          @click="changeStep(3)"
          :class="{'bold-weight' : step == 3}"
        >Formula</a>
      </li>
      <li>
        <a
          class="nav-link nav-item light-grey"
          @click="changeStep(4)"
          :class="{'bold-weight' : step == 4}"
        >Analysis</a>
      </li>
      <li v-if="contactBool">
        <a
          class="nav-link nav-item light-grey"
          @click="changeStep(5)"
          :class="{'bold-weight' : step == 5}"
        >Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    changeStep(step) {
      this.$store.dispatch("changeStep", step);
    }
  },
  computed: {
    ...mapState(["step", "contactBool"])
  }
};
</script>

<style scoped>
.light-grey {
  color: #667480 !important;
}

.bold-weight {
  color: black !important;
  font-weight: 600;
}
</style>