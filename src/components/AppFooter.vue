<template>
  <div id="footer-container">
    <div class="left">
      <p>© Ramsay 2020.</p>
    </div>
    <div class="right">
      <a href="#">
        <span>G</span>
      </a>
      <a href="#">
        <span>L</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
#footer-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
</style>
