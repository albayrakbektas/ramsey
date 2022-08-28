<template>
  <div id="header-container">
    <div
      class="header-bg"
      :class="{ 'active-header-bg': $store.state.isScrolled }"
    ></div>
    <div class="py">
      <img alt="Name logo" src="../assets/brand-logo.png" />
    </div>
    <div v-if="!$store.state.isMobileView" class="mid">
      <a href="tel:+905050070844"> +96 56-85-13-79 </a>
      <div>
        <span class="slash"> / </span>
      </div>
      <a href="mailto:albayrakbektas44@gmail.com"> contact@robert.com </a>
    </div>
    <div class="py">
      <i @click="openMenu" class="fa-regular fa-bars menu-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {
    openMenu() {
      this.$store.state.isMenuOpen = true;
      document.querySelector(".main-menu").classList.remove("closed-menu");
      document.querySelector(".main-menu").classList.add("opened-menu");
      setTimeout(() => {}, 1000);
      document.querySelector("nav").style.transform = "translateY(0)";
      document.querySelector(".menu-footer").style.transform = "translateY(0)";
    },
  },
};
</script>

<style lang="scss" scoped>
#header-container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 3rem 4rem;
}
img {
  height: 40px;
  width: 150px;
  cursor: pointer;
}
.mid {
  display: flex;
  justify-content: start;
  gap: 1rem;
  padding: 0 10vw;
  font-size: 1rem;
}
.slash {
  color: #808080;
}
.menu-icon {
  cursor: pointer;
  font-size: 24px;
  font-weight: bolder;
  color: #fff;
  transition: all 0.2s ease-in 0s;
  &:hover {
    color: #c32865;
  }
}
.header-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 0;
  width: 100%;
  background-color: #272727;
  transition: height 1s;
  z-index: 1;
}
.active-header-bg {
  height: 100%;
}
@media (max-width: 500px) {
  .container {
    padding: 0 !important;
  }
  #header-container {
    grid-template-columns: repeat(2, auto) !important;
    padding: 0 1.5rem !important;
    height: fit-content;
  }
  .py {
    padding: 2rem 0;
  }
}
</style>
