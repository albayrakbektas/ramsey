<template>
  <div id="header-container">
    <div>
      <img alt="Name logo" src="../assets/brand-logo.png" />
    </div>
    <div class="mid">
      <a href="tel:+905050070844"> +96 56-85-13-79 </a>
      <div>
        <span class="slash"> / </span>
      </div>
      <a href="mailto:albayrakbektas44@gmail.com"> contact@robert.com </a>
    </div>
    <div>
      <div>
        <i @click="openMenu" class="fa-regular fa-bars menu-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    openMenu() {
      this.$store.state.isMenuOpen = true;
      document.querySelector(".main-menu").classList.remove("closed-menu");
      document.querySelector(".main-menu").classList.add("opened-menu");
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
  padding: 0 1rem;
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
span {
}
</style>
