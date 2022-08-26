<template>
  <div class="first-section">
    <BgImage :bg-img="bgImage" />
    <div class="content">
      <div class="content-top">
        <h1>
          <span>Howdy,</span> <br v-if="$store.state.isMobileView" />
          I'm
          <br />
          Ramsay
        </h1>
      </div>
      <div class="content-bottom">
        <hr class="hr" />
        <div class="play-circle">
          <span class="material-symbols-outlined"> play_arrow </span>
        </div>
        <span class="watch-resume">Watch Resume</span>
      </div>
    </div>
  </div>
</template>

<script>
import BgImage from "@/components/BgImage";
export default {
  name: "FirstSection",
  components: { BgImage },
  data() {
    return {
      bgImage: {
        src: require("../assets/section-bg-images/section-1-bg.jpeg"),
        alt: "ramsay image",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  grid-template-rows: auto auto !important;
  padding-left: 2rem !important;
}
.content-top {
  margin-top: 6rem;
}
h1 {
  font-size: 6.54rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: -5.5px;
  * {
    font-size: 6.54rem;
    line-height: 1;
    font-weight: 600;
    letter-spacing: -5.5px;
  }
  span {
    color: #c32865;
  }
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}

.content-bottom {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  align-items: center;
  cursor: pointer;
  height: min-content;
  width: min-content;
  margin-top: 2rem;
  padding-top: 2rem;
  &:hover {
    .material-symbols-outlined,
    .watch-resume {
      color: #c32865;
      transition: all 0.2s ease-in 0s;
    }
    .play-circle {
      transition: all 0.2s ease-in 0s;
      border-color: #c32865;
    }
  }
}
.watch-resume {
  width: auto;
  font-size: 1.25rem;
  white-space: nowrap;
}
.resume:hover {
  color: #c32865;
}
.play-circle {
  height: 70px;
  width: 70px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
}
@media (max-width: 500px) {
  .first-section {
    overflow: hidden !important;
  }
  h1 {
    font-size: 5.55rem !important;
    letter-spacing: 0.02rem !important;
    * {
      letter-spacing: 0.02rem !important;
      font-size: 5.55rem !important;
    }
  }
  .hr {
    width: 5vw !important;
    margin-top: 3.5rem !important;
  }
  .play-circle {
    height: 60px !important;
    width: 60px !important;
  }
  .content {
    padding-left: 4rem !important;
  }
}
</style>
