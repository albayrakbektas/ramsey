<template>
  <div class="landing-page">
    <h1>
      Use
      <span>desktop</span>
      for best experience...
    </h1>
    <div class="progress-container">
      <progress id="loading" :value="barValue" max="100"></progress>
      <p>{{ barValue }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      barValue: 0,
      loading: 0,
    };
  },
  mounted() {
    this.loadingBar();
  },
  methods: {
    loadingBar() {
      const a = setInterval(() => {
        this.barValue++;
        this.loading++;
        if (this.loading > 100) {
          clearInterval(a);
          this.$store.state.isLandingPage = false;
        }
      }, 20);
    },
  },
};
</script>

<style lang="scss" scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1b1b1b;
  opacity: 0;
  animation: opacity 2s;
  animation-iteration-count: 1;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes wTp {
  0% {
    color: #ffffff;
  }
  50% {
    color: rgba(195, 40, 101, 0.5);
  }
  100% {
    color: rgba(195, 40, 101, 1);
  }
}
@keyframes pTw {
  0% {
    color: rgba(195, 40, 101, 1);
  }
  50% {
    color: rgba(195, 40, 101, 0.5);
  }
  100% {
    color: #ffffff;
  }
}
h1 {
  margin: 0;
  color: #c32865;
  animation: pTw 2s linear;
}
span {
  color: white;
  animation: wTp 2s linear;
}
progress {
  accent-color: #c32865;
  width: 30vw;
}
p {
  text-align: center;
  margin: 0;
}
@media (max-width: 500px) {
  h1 {
    text-align: center;
  }
}
</style>
