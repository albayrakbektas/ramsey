<template>
  <div class="third-section">
    <BgImage :bg-img="bgImg" />
    <BgText text="about us" />
    <ExperienceCard />
    <div class="second-card">
      <BestWebSites />
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
.third-section {
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 3rem;
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
