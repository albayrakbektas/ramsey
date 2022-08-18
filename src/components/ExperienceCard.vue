<template>
  <div class="experience-card">
    <span class="experience-year">4</span>
    <div class="card-bottom">
      <div class="hr-container">
        <div></div>
        <div></div>
        <div class="hr"></div>
      </div>
      <div class="content">
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
.experience-card {
  border: 1px solid #ffffff;
  display: grid;
  align-items: center;
  padding: 3.75rem;
  width: 50%;
  .experience-year {
    padding: 0;
    font-size: 18em;
    text-align: center;
    font-family: Montserrat, sans-serif;
  }
}
.card-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.content {
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
.hr {
  height: 1px;
  width: 50%;
  background-color: #ffffff;
}
</style>
