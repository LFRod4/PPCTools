import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 1,
    keyword: "",
    leads: 0,
    leadValue: 0,
    cpc: 0,
    impressions: 0,
    spend: null,
    clicks: null,
    modal: false,
    contactBool: false
  },
  mutations: {
    NEXTSTEP: state => {
      state.step++;
      if (state.step == 5) {
        state.contactBool = true;
      }
    },
    CHANGESTEP: (state, step) => {
      state.step = step;
    },
    SETKEYWORD: (state, keyword) => {
      state.keyword = keyword;
    },
    SETGOALS: (state, goals) => {
      state.leads = Number(goals[0]);
      state.leadValue = Number(goals[1]);
    },
    SETIMPRESSIONS: (state, impressions) => {
      state.impressions = impressions;
    },
    SETCPC: (state, cpc) => {
      state.cpc = cpc;
    },
    SPENDCLICKS: (state, payload) => {
      state.spend = payload[0];
      state.clicks = payload[1];
    },
    SETMODAL: state => {
      state.modal = !state.modal;
    }
  },
  actions: {
    nextStep: context => {
      if (context.state.step == 2) {
        context.dispatch("keywordData");
      }
      context.commit("NEXTSTEP");
    },
    changeStep: (context, step) => {
      context.commit("CHANGESTEP", step);
    },
    setKeyword: (context, keyword) => {
      context.commit("SETKEYWORD", keyword);
    },
    setGoals: (context, goals) => {
      context.commit("SETGOALS", goals);
    },
    keywordData: context => {
      axios.defaults.headers = {
        "Content-Type": "application/json"
      };

      var params = {
        term: context.state.keyword,
        api_key: process.env.VUE_APP_APIKEY
      };

      axios
        .get("https://www.spyfu.com/apis/core_api/get_term_metrics_us", {
          params
        })
        .then(res => {
          console.log(res);
          context.dispatch("getImpressions", res);
          context.dispatch("getCpc", res);
        })
        .catch(err => {
          return err;
        });
    },
    getImpressions: (context, res) => {
      let impressions =
        res.data["broadLocalDailySearchVolume"] +
        res.data["phraseLocalMonthlySearchVolume"] +
        res.data["exactLocalMonthlySearchVolume"];
      context.commit("SETIMPRESSIONS", impressions);
    },
    getCpc: (context, res) => {
      let arr = [];
      arr.push(res.data["broadCostPerClick"].replace(/[^\d.]/g, ""));
      arr.push(res.data["phraseCostPerClick"].replace(/[^\d.]/g, ""));
      arr.push(res.data["exactCostPerClick"].replace(/[^\d.]/g, ""));

      let maxCpc = Math.max(Number(arr[0]), Number(arr[1]), Number(arr[2]));

      context.commit("SETCPC", maxCpc);
    },
    spendClicks: (context, payload) => {
      context.commit("SPENDCLICKS", payload);
    },
    setModal: context => {
      context.commit("SETMODAL");
    }
  },
  modules: {}
});
