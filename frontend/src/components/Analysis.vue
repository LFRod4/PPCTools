<template>
  <div>
    <div class="title">Analysis</div>
    <div class="columns">
      <div class="column is-2">
        <aside class="menu">
          <a class="menu-label" @click="active = 0">Overview</a>
          <ul class="menu-list">
            <li>
              <a :class="{'is-active' : active == 1}" @click="active = 1">Spend</a>
            </li>
            <li>
              <a :class="{'is-active' : active == 2}" @click="active = 2">Avg. CPC/Clicks</a>
            </li>
            <li>
              <a :class="{'is-active' : active == 3}" @click="active = 3">Conv. / Conv. Rate</a>
            </li>
          </ul>
        </aside>
      </div>
      <div class="column right-column">
        <div class="content">
          <!-- Overview -->
          <div v-if="active == 0">
            <p class="title is-size-4 light-black">So what exactly did you just do?</p>
            <p
              class="sub-title is-size-5 light-black"
            >Let's break down how this will help you better understand how to approach PPC. There were 3 pieces to the formula you just saw, which were Spend, Avg. CPC/Clicks, &amp; Conversions/Conversion Rate.</p>
            <p
              class="sub-title is-size-5 light-black"
            >Each of these steps are connected but have a different source of influence.</p>
            <div class="content is-medium light-black">
              <ul class="is-medium">
                <li>Spend depends on the performance of the following two points</li>
                <li>Avg. CPC/Clicks are managed within the PPC platform</li>
                <li>Conversions/Conversion Rate rely on your landing page</li>
              </ul>
            </div>
          </div>
          <!-- Spend -->
          <div class="is-size-5 light-black content" v-if="active == 1">
            <p>Every PPC sales persons' favorite quote to hear:</p>
            <div class="quote-container">
              <div class="is-size-5 light-black is-inline-block">
                <span class="quote">
                  <span class="quote-icon">
                    <i class="fas fa-quote-left"></i>
                  </span>
                  If you can make it work I can triple my budget tomorrow...
                  <span
                    class="quote-icon"
                  >
                    <i class="fas fa-quote-right"></i>
                  </span>
                </span>
              </div>
            </div>
            <p>Your spend should be determined by the ambition of your expectations and not an external partner. The difference in an account spending $2k/month versus one that spends $50k/month is simply the speed at which we can test things. The more we can test the quicker we can find what does and doesn't work.</p>
            <p>
              Here are your KPI goals:
              <ul>
                  <li><span class="has-text-weight-bold">Spend:</span> ${{currency(spend)}}</li>
                  <li><span class="has-text-weight-bold">Conversions:</span> {{leads}}</li>
                  <li><span class="has-text-weight-bold">Cost Per Conversion:</span> ${{currency(cpa)}}</li>
                  <!-- <li><span class="has-text-weight-bold">Potential ROI:</span> ${{currency(roi)}}</li> -->
              </ul>
            </p>
            <p class="note">**Note: These are rough estimates based on Spyfu CPCs of one keyword and a conversion rate of 5%. This is meant to give you an idea of what your business math looks like, but data that will matter will be the actual numbers produced within the account.</p>
            <p>With that being said, it makes sense to everyone that if goals are being met then you'd want to spend more so how we can hit those goals? Let's see what two components affect your performance.</p>
         
          </div>
          <!-- Clicks -->
          <div class="is-size-5 light-black content" v-if="active == 2">
            <div class="content">
              <p>The first part to this venture is getting the right audience. The objective of platforms like Google and Facebook is to get traffic to your website. Not just any traffic, but <span class="has-text-weight-bold">quality</span> traffic.</p>
              <p>Based on your goals you need <span class="has-text-weight-bold">{{clicks}} clicks</span> but with the wrong partner those clicks can mean nothing if you are getting the wrong traffic. This is where the PPC expertise comes in because the right partner will know how to strategically appear in front of the right audience with high intent. </p>
              <p>This is why we will not sell you on Click Through Rates and instead will keep the focus on what matters, which are the conversions and the return on your investment.</p>
            </div>
            
          </div>
          <!-- Conversions -->
          <div class="is-size-5 light-black content" v-if="active == 3">
            <p>So now you have quality traffic, but it doesn't mean you have a conversion just yet. A common problem is thinking that CRO means you simply have an aesthetically pleasing website.</p>
            <p>CRO goes beyond the looks, but more so the design elements of the page. Here are some interesting elements to consider on your landing page:</p>
            <p>Find out what a conversion rate higher than 5% does to your KPIs:</p>
            <div class="columns bullet-section" :class="{'border-bottom' : reCalc == true}">
                <div class="column is-3">
                    <label class="label">New conversion rate:</label>
                    <input class="input" v-model="newRate"/>
                    <button class="button" @click="calculate()">Calculate</button>
                </div>
                <div class="column">
                    <div class="content">
                    <p> Previous KPI goals:
                    <ul>
                        <li><span class="has-text-weight-bold">Spend:</span> ${{currency(spend)}}</li>
                        <li><span class="has-text-weight-bold">Conversions:</span> {{leads}}</li>
                        <li><span class="has-text-weight-bold">Cost Per Conversion:</span> ${{currency(cpa)}}</li>
                        <!-- <li v-if="roi > spend"><span class="has-text-weight-bold">Potential ROI:</span> ${{currency(roi)}}</li> -->
                        <li><span class="has-text-weight-bold">Conv. Rate:</span> 5%</li>
                    </ul>
                    </p>
                    </div>
                </div>
                <div class="column" v-if="reCalc == true">
                    <div class="content">
                    <p> New KPI goals:
                    <ul>
                        <li><span class="has-text-weight-bold">Spend:</span> ${{currency(spend)}}</li>
                        <li><span class="has-text-weight-bold">Conversions:</span><span :class="{'has-text-success' : newLeads > leads, 'has-text-danger' : newLeads < leads}"> {{newLeads}}</span></li>
                        <li><span class="has-text-weight-bold">Cost Per Conversion:</span><span :class="{'has-text-success' : newCpa < cpa, 'has-text-danger' : newCpa > cpa}">  ${{currency(newCpa)}}</span></li>
                        <!-- <li v-if="roi > spend"><span class="has-text-weight-bold">Potential ROI:</span><span :class="{'has-text-success' : newRoi > roi, 'has-text-danger' : newRoi < roi}">  ${{currency(newRoi)}}</span></li> -->
                        <li><span class="has-text-weight-bold">Conv. Rate:</span><span :class="{'has-text-success' : newRate > 5, 'has-text-danger' : newRate < 5}">  {{newRate}}%</span></li>
                    </ul>
                    </p>
                    </div>
                </div>
            </div>
            <div class="content" v-if="reCalc == true">
                <p class="has-text-weight-bold">CRO tactics to increase conversion rates:</p>
                <ul>
                    <li>No navigation links</li>
                    <li>A single CTA across the page</li>
                    <li>Form must be above the fold</li>
                    <li>Multi-step form</li>
                    <li>Good balance and content and white space</li>
                </ul>
            </div>
          </div>
          <button class="button next-button" v-if=" active != 3" @click="next()">Next</button>
          <button class="button chat-button" v-if="reCalc == true && active == 3" @click="nextStep()">Let's Talk About Your Goals</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Analysis",
  data() {
    return {
      active: 0,
      newRate: null,
      newLeads: null,
      newCpa: null,
      newClicks: null,
      newRoi: null,
      reCalc: false,
    };
  },
  methods: {
    next() {
      this.active++;
    },
    calculate() {
        this.reCalc = true;
        this.newLeads = ((this.newRate / 100 ) * this.clicks).toFixed(2);
        this.newCpa = (this.spend / this.newLeads).toFixed(2);
        let newValue = (this.leadValue * this.newLeads).toFixed(2);
        this.newRoi = (newValue - this.spend).toFixed(2);
    },
    currency(x) {
        return new Intl.NumberFormat().format(x);
    },
    nextStep() {
      this.$store.dispatch("nextStep");
    }
  },
  computed: {
      cpa() {
          return this.spend / this.leads;
      },
      roi() {
          let totalVal = this.leads * this.leadValue;
          return (totalVal - this.spend).toFixed(2);
      },
    ...mapState(["spend", "impressions", "leads", "leadValue", "clicks"])
  }
};
</script>

<style scoped>
.bullet-section {
  border-top: 1px #c3e1fa solid;
  margin-top: 10px;
  padding-top: 5px;
}

.border-bottom {
  border-bottom: 1px #c3e1fa solid;
  margin-bottom: 10px;
  padding-bottom: 5px;
}

.menu {
  text-align: left;
}

.button {
   margin-top: 40px;
}

.right-column {
  text-align: left;
}

.is-active {
  background-color: #c3e1fa !important;
  color: #2f3539 !important;
  font-weight: 550;
}

.menu-list {
  padding-bottom: 5px !important;
}

.quote {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}

.quote-icon {
  font-size: 12px;
}

.quote-container {
  padding-left: 40px;
  padding-bottom: 10px;
}

.note {
  font-size: 15px;
}

.chat-button {
  width: 250px;
}

.next-button {
  width: 150px;
}
</style>