<template>
  <div>
    <div class="title">The Science Behind Positive ROI</div>
    <div
      class="content subtitle"
    >Now this looks crazy, but let's break down where these numbers came from:</div>
    <div class="bullets">
      <ul>
        <li>
          <span class="has-text-weight-bold">Conversions:</span> Your goal volume of leads
        </li>
        <li>
          <span class="has-text-weight-bold">Conversion Rate:</span> 5%, but this will vary. Google Search average is 3%
        </li>
        <li>
          <span class="has-text-weight-bold">Clicks:</span> Simple math done with conversions and conversion rate
        </li>
        <li>
          <span class="has-text-weight-bold">Avg CPC:</span> Based on the keyword you provided and Spyfu data
        </li>
        <li>
          <span class="has-text-weight-bold">Spend:</span> Given the numbers above this is the budget needed to make these numbers a reality
        </li>
      </ul>
    </div>
    <div class="container level-item">
      <div class="level">
        <div class="columns is-vcentered level-item">
          <!-- Spend -->
          <div class="column is-2">
            <div class="columns">
              <div class="column">
                <div class="break spend">Spend</div>
                <input class="input break spend-input-box" v-model="spend" readonly />
              </div>
              <!-- Equal -->
              <div class="column is-narrow equal1">
                <i class="fas fa-equals"></i>
              </div>
            </div>
          </div>
          <!-- CPC -->
          <div class="column is-narrow">
            <div class="break">Avg. CPC</div>
            <img class="break image is-96x96" src="@/assets/img/arrow.png" />
            <input class="input break input-box" v-model="cpc" readonly />
          </div>
          <!-- X -->
          <div class="column is-narrow times">
            <i class="fas fa-times"></i>
          </div>
          <!-- Clicks -->
          <div class="colum">
            <div class="clicks">Clicks</div>
            <input class="input break input-box2" v-model="clicks" readonly />
          </div>
          <!-- Equals -->
          <div class="column is-narrow equals">
            <i class="fas fa-equals"></i>
          </div>
          <!-- Conversion Rate -->
          <div class="column is-narrow">
            <div class="break">Conversion Rate ( % )</div>
            <img class="break image is-96x96" src="@/assets/img/arrow.png" />
            <input class="input break input-box" v-model="cvr" />
          </div>
          <!-- X -->
          <div class="column is-narrow times2">
            <i class="fas fa-times"></i>
          </div>
          <!-- Conversions -->
          <div class="colum">
            <div class="conversions">Conversions</div>
            <input class="input break input-box2" v-model="leads" readonly />
          </div>
        </div>
      </div>
    </div>
    <button class="button" @click="nextStep()">Learn What This Means</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Formula",
  data() {
    return {
      cvr: 5
    };
  },
  methods: {
    nextStep() {
      let spendClicks = [this.spend, this.clicks];
      this.$store.dispatch("spendClicks", spendClicks);
      this.$store.dispatch("nextStep");
    },
    calculate() {
      this.reCalc = true;
      this.newLeads = ((this.newRate / 100) * this.clicks).toFixed(2);
      this.newCpa = (this.spend / this.newLeads).toFixed(2);
      let newValue = (this.leadValue * this.newLeads).toFixed(2);
      this.newRoi = (newValue - this.spend).toFixed(2);
    },
    currency(x) {
      return new Intl.NumberFormat().format(x);
    }
  },
  computed: {
    clicks() {
      let clicks = this.leads / (this.cvr / 100);
      return clicks;
    },
    spend() {
      let spend = this.cpc * this.clicks;
      return spend;
    },
    ...mapState(["step", "leads", "leadValue", "cpc"])
  }
};
</script>

<style scoped>
input {
  width: 80px;
}

.content {
  text-align: left;
  margin-bottom: 5px !important;
}

.bullets {
  text-align: left;
  padding-left: 20px;
}

.bullets ul li {
  list-style-type: disc;
}

.times {
  font-size: 30px;
  margin-top: 120px;
}

.times2 {
  font-size: 30px;
  margin-top: 120px;
  margin-left: -20px;
}

.break {
  display: block;
}

.clicks {
  border-bottom: 2px solid black;
  margin-bottom: 30px;
  padding-top: 30px;
  width: 80px;
}

.conversions {
  border-bottom: 2px solid black;
  margin-bottom: 30px;
  padding-top: 30px;
  width: 100px;
}

img {
  margin: 0 auto;
}

.input-box {
  margin: 0 auto;
  text-align: center;
}

.spend-input-box {
  margin: 0 auto;
  text-align: center;
  top: 53px;
}

.spend {
  font-weight: bold;
  font-size: 30px;
}

.equal1 {
  margin-top: 70px;
  margin-right: 80px;
  font-size: 30px;
}

.input-box2 {
  text-align: center;
  margin-top: 63px;
  margin-left: 10px;
}

.equals {
  margin-left: 20px;
  font-size: 30px;
  margin-top: 120px;
}

.title {
  padding-top: 15px;
  padding-bottom: 20px;
}

.button {
  margin-top: 50px;
}
</style>
