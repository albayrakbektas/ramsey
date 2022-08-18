<template>
  <div class="first-section">
    <div class="content">
      <h1 class="purple">
        <span>Howdy,</span>
        <span> I'm</span>
      </h1>
      <br />
      <h1>Ramsay</h1>
    </div>
    <div class="resume">
      <hr />
      <div class="play-circle">
        <span class="material-symbols-outlined"> play_arrow </span>
      </div>
      <span class="watch-resume">Watch Resume</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstSection",
};
</script>

<style lang="scss" scoped>
.first-section {
  position: relative;
}
.content {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 0.2rem;
  justify-content: start;
  margin-top: 5rem;
}
h1 {
  font-size: 6.54rem;
  line-height: 1;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  span:first-child {
    color: #c32865;
  }
}
.material-symbols-outlined {
  font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 48;
}
hr {
  position: fixed;
  left: 0;
  width: 5vw;
}
.resume {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 1rem;
  align-items: center;
  cursor: pointer;
  height: min-content;
  width: min-content;
  margin-top: 5rem;
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
  height: 65px;
  width: 65px;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
