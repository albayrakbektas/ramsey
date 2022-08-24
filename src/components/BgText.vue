<template>
  <div v-if="!$store.state.isMobileView" class="bg-text">
    <span class="rotate-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "BgText",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.bg-text {
  font-size: 9.16667rem;
  font-weight: 600;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 7.91667rem;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  text-transform: lowercase;
  opacity: 0.05;
  color: #fff;
}
.rotate-text {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  -webkit-transition: all 0.5s 0.6s ease-out;
  transition: all 0.5s 0.6s ease-out;
  -webkit-transform: translate(-50%, -50%) rotate(-90deg);
  -ms-transform: translate(-50%, -50%) rotate(-90deg);
  transform: translate(-50%, -50%) rotate(-90deg);
  white-space: nowrap;
  letter-spacing: 0;
  opacity: 1;
}
</style>
