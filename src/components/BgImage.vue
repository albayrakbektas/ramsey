<template>
  <div class="bg-img">
    <img :src="bgImg.src" :alt="bgImg.alt" />
  </div>
</template>

<script>
export default {
  name: "BgImage",
  props: {
    bgImg: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}
</style>
