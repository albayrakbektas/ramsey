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
@media (max-width: 500px) {
  img {
    object-fit: cover !important;
  }
}
.bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
}
img {
  object-fit: fill;
  height: 100%;
  width: 100%;
}
</style>
