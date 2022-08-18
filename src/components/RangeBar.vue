<template>
  <div class="range-bar-container">
    <div class="range-bar-header">
      <div class="range-bar-title">{{ title }}</div>
      <div class="range-bar-percent">{{ percent }} %</div>
    </div>
    <progress
      :value="this.percent"
      max="100"
      ref="bar"
      class="range-bar"
    ></progress>
  </div>
</template>

<script>
export default {
  name: "RangeBar",
  props: {
    title: {
      type: String,
      required: true,
      default: "Skill",
    },
    percent: {
      type: String,
      required: true,
      default: "Skill",
    },
  },
};
</script>

<style lang="scss" scoped>
.range-bar-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
}
.range-bar-header {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  color: #ffffff;
  & > div {
    font-size: 14px;
    font-family: Poppins, sans-serif;
  }
}
progress {
  width: 100%;
  height: 3rem;
  background-color: #c32865;
}
progress::-moz-progress-bar {
  background: #c32865;
}
progress::-webkit-progress-value {
  background: #c32865;
}
</style>
