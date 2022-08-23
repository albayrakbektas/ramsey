import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
    iconList: [
      {
        href: "#",
        src: "fa-brands fa-twitter",
        alt: "twitter",
      },
      {
        href: "#",
        src: "fa-brands fa-facebook-f",
        alt: "twitter",
      },
      {
        href: "#",
        src: "fa-brands fa-google-plus-g",
        alt: "twitter",
      },
      {
        href: "#",
        src: "fa-brands fa-linkedin",
        alt: "twitter",
      },
      {
        href: "#",
        src: "fa-solid fa-basketball",
        alt: "twitter",
      },
    ],
    bgImgIndex: 0,
    bgImgList: [
      {
        src: require("../assets/section-bg-images/works-bg_1.jpeg"),
        alt: "as",
      },
      {
        src: require("../assets/section-bg-images/works-bg_2.jpeg"),
        alt: "as",
      },
      {
        src: require("../assets/section-bg-images/works-bg_3.jpeg"),
        alt: "as",
      },
      {
        src: require("../assets/section-bg-images/works-bg_4.jpeg"),
        alt: "as",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
