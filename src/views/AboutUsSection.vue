<template>
  <div class="third-section">
    <BgImage :bg-img="bgImg" />
    <BgText text="about us" />
    <div class="content">
      <div class="card-container">
        <ExperienceCard />
      </div>
      <div class="second-card">
        <BestWebSites />
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard";
import BestWebSites from "@/components/BestWebSites";
import BgText from "@/components/BgText";
import BgImage from "@/components/BgImage";
export default {
  name: "FourthSection",
  components: { BgImage, BgText, BestWebSites, ExperienceCard },
  data() {
    return {
      bgImg: {
        src: require("../assets/section-bg-images/about-us.jpeg"),
        alt: "about us background image",
      },
      course: {
        title: "SPECIALIZATION COURSE",
        place: "University of studies, Poland, Cracow",
        date: "Jan 2004 - Dec 2006",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus nobis animi assumenda sint recusandae! Dolor placeat debitis animi illum quo repellendus pariatur.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .content {
    overflow-y: scroll !important;
    height: 100vh !important;
    grid-template-columns: 1fr !important;
    padding: 70px 0 !important;
  }
}
.third-section {
  justify-items: center;
}
.content {
  grid-template-columns: 1fr 1fr;
  padding-left: 0;
  height: auto;
}
.card-container {
  display: grid;
  justify-items: center;
}
.second-card {
  height: 100%;
  align-content: center;
}
.rotate-text {
  left: unset;
}
</style>
