<template>
  <div id="app">
    <div class="header-position container">
      <AppHeader />
    </div>
    <MainPage />
    <div class="footer-position container">
      <AppFooter />
    </div>
    <div
      @click="closeMenu"
      v-if="this.$store.state.isMenuOpen"
      class="full-width-absolute"
    ></div>
    <MainMenu />
  </div>
</template>

<script>
import MainPage from "@/views/MainPage";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import MainMenu from "@/components/MainMenu";
export default {
  name: "App",
  components: { MainMenu, AppFooter, AppHeader, MainPage },
  mounted() {
    document.querySelectorAll(".hr").forEach((e) => {
      e.style.width = "10vw";
    });
  },
  methods: {
    closeMenu() {
      this.$store.state.isMenuOpen = false;
      document.querySelector(".main-menu").classList.remove("opened-menu");
      document.querySelector(".main-menu").classList.add("closed-menu");
    },
  },
};
</script>

<style lang="scss">
* {
  z-index: 1;
  box-sizing: border-box;
}
html {
  font-size: 14px !important;
  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }
}
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
body::-webkit-scrollbar {
  display: none;
}
h1 {
  font-family: Montserrat, sans-serif;
  font-size: 3.428rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.2;
  text-transform: none;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-height: calc(100vh - 70px);
  width: 100vw;
}
.content {
  display: grid;
  grid-column-gap: 0.2rem;
  justify-content: start;
  max-width: 1140px;
  margin: auto;
  width: 100%;
  padding-left: 11rem;
}
.section-display {
  display: grid;
  align-items: center;
}
a {
  text-decoration: none;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #ffffff;
  }
}
span,
p,
h1,
h2,
a {
  color: #ffffff;
}
.purple {
  color: #c32865;
}
.header-position {
  position: sticky;
  top: 0;
  z-index: 10;
}
.container {
  padding: 2rem 4rem;
}
.footer-position {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding-top: 0 !important;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
i {
  cursor: pointer;
}
.icon-link {
  color: #757575;
}
.full-width-absolute {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: 0.2;
  z-index: 110;
}
.closed-menu {
  transform: translateX(100%) !important;
  width: 0 !important;
}
.opened-menu {
  transform: translateX(0) !important;
  width: 34% !important;
}
.bottom-link {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  position: relative;
  margin-top: 3rem;
}
.hr {
  width: 0;
  transition: width 1s;
  float: left;
  position: fixed;
  left: 0;
}
.h2 {
  padding-left: calc(8vw);
  font-size: 1.3rem;
}
</style>
