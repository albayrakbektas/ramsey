<template>
  <div class="experience-card">
    <span class="experience-year">4</span>
    <div class="card-bottom">
      <div class="hr-container">
        <div></div>
        <div></div>
        <div class="hr-box"></div>
      </div>
      <div class="text">
        <span>Years</span>
        <span>Experience</span>
        <span>Working</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .experience-card {
    width: 80% !important;
  }
}
.experience-card {
  border: 1px solid #ffffff;
  display: grid;
  align-items: center;
  padding: 3.75rem;
  width: 50%;
  position: relative;
  .experience-year {
    justify-self: center;
    padding: 0;
    font-size: 23rem;
    line-height: 1;
    font-weight: 400;
    font-family: Montserrat, sans-serif;
  }
}
.card-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.text {
  display: grid;
  grid-template-columns: 1fr;
  text-align: end;
  span {
    font-size: 1.5rem;
  }
}
.hr-container {
  display: grid;
  align-items: center;
  height: 100%;
  width: 100%;
}
.hr-box {
  height: 1px;
  width: 50%;
  background-color: #ffffff;
}
</style>
