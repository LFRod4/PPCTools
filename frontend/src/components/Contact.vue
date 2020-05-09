<template>
  <div>
    <div class="columns">
      <div class="column is-4">
        <div class="field">
          <label class="label light-black">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Luis" v-model="name" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label light-black">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="hello@bradynce.com" v-model="email" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label light-black">Business Name</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="businessName" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label light-black">Phone</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" v-model="phone" @input="acceptNumber()" />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link is-flex-mobile"
              @click="sendEmail()"
            >Let's Talk About Your Goals</button>
          </div>
        </div>
      </div>

      <div class="column right-column">
        <div class="is-size-4 has-text-weight-bold">Understand Your PPC Strategy Like A Clear View</div>
        <img class="image" src="@/assets/img/illustrations/drawings/line-city.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      phone: "",
      step: 1,
      name: "",
      email: "",
      businessName: ""
    };
  },
  methods: {
    acceptNumber() {
      let x = this.phone
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phone = !x[2]
        ? x[1]
        : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
    },
    sendEmail() {
      let contactInfo = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        businessName: this.businessName
      };

      axios.defaults.headers = {
        "Content-Type": "application/json"
      };
      axios
        .post("https://api.bradynce.com/api/email/", {
          contactInfo
        })
        .then(res => {
          console.log(res);
          this.$store.dispatch("nextStep");
          return res;
        })
        .catch(err => {
          console.log(err);
          return err;
        });
    }
  },
  computed: {}
};
</script>

<style scoped>
.right-column {
  padding-top: 5vh;
}
.question {
  padding-top: 50px;
}
label {
  text-align: left;
}

.image {
  margin: 0 auto;
  max-width: 70%;
  padding-top: 30px;
}
</style>