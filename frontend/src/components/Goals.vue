<template>
  <div>
    <div class="title about-you">About You</div>
    <div class="questions">
      <div class="subtitle">How many leads do you want a month?</div>
      <input class="input term-input" placeholder="50" v-model="leads" />
      <div class="subtitle">How much is a closed lead worth to you?</div>
      <input class="input term-input" placeholder="500" v-model="leadValue" />
      <div class="subtitle">What is an ideal keyword for your business?</div>
      <input class="input term-input" placeholder="Lawyers near me" v-model="keyword" />
    </div>
    <br />
    <button class="button" @click="nextStep()">Next</button>
  </div>
</template>

<script>
export default {
  name: "Goals",
  data() {
    return {
      leads: null,
      leadValue: null,
      keyword: ""
    };
  },
  methods: {
    nextStep() {
      let goals = [this.leads, this.leadValue];
      this.$store.dispatch("setKeyword", this.keyword);
      this.$store.dispatch("setGoals", goals);
      this.$store.dispatch("nextStep");
    }
  }
};
</script>

<style scoped>
input {
  width: 100px;
  padding-left: 30px;
  margin-left: 30px;
}

.term-input {
  width: 250px;
  padding-left: 5px;
}

.button {
  width: 150px;
}
</style>