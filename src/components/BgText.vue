<template>
  <div class="bg-text">
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
  z-index: 1;
}
.rotate-text {
  position: absolute;
  top: 70px;
  left: 70px;
  bottom: 0;
  font-size: 11rem;
  font-weight: bold;
  transform-origin: 50% 50%;
  transform: rotate(-90deg);
  /* Safari */
  -webkit-transform: rotate(-90deg);
  /* Firefox */
  -moz-transform: rotate(-90deg);
  /* IE */
  -ms-transform: rotate(-90deg);
  /* Opera */
  -o-transform: rotate(-90deg);
  color: #757575;
  opacity: 0.1;
}
</style>
