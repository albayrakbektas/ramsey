<template>
  <div class="range-bar-container">
    <div class="range-bar-header">
      <div class="range-bar-title">{{ title }}</div>
      <div class="range-bar-percent">{{ percent }} %</div>
    </div>
    <div class="progress-container">
      <progress
        :value="this.percent"
        max="100"
        ref="bar"
        class="range-bar"
      ></progress>
    </div>
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
@keyframes progressBar {
  0% {
    left: 0;
    width: 0;
  }
  50% {
    left: 50%;
    width: 50%;
  }
  100% {
    left: 100%;
    width: 100%;
  }
}
progress {
  animation: progressBar 5s linear;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  content: "";
  width: 100%;
  height: 3rem;
  background-color: #c32865;
  //transition: all 5s ease;
  //-webkit-transition: all 5s ease;
}
progress::-moz-progress-bar {
  background: #c32865;
}
progress::-webkit-progress-value {
  background: #c32865;
}
.progress-container {
  height: 3rem;
  background-color: #2f2f2f;
}
</style>
