import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      { text: "Home", to: "/", icon: "home" },
      { text: "DevFest 2019", to: "/devfest", icon: "mdi-code-tags" },
      { text: "Events", to: "/events", icon: "mdi-calendar-outline" },
      { text: "Team", to: "/team", icon: "group" },
      { text: "About", to: "/about", icon: "mdi-information-outline" },
      { text: "WTM Addis", to: "/wtmaddis", icon: "mdi-human-female-female" },
      {
        text: "News",
        to: "/news",
        icon: "mdi-newspaper-variant-multiple-outline"
      },
      { text: "Addis Forum", to: "/forum", icon: "mdi-forum-outline" },
      {
        text: "Jobs/Interships",
        to: "jobsInternship",
        icon: "mdi-briefcase-outline"
      },
      { text: "Contact", to: "/contact", icon: "mdi-account-box-outline" }
    ]
  },
  getters: {
    links: state => {
      return state.items;
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {}
});
