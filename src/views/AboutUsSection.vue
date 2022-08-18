<template>
  <div class="third-section">
    <div class="bg-text">
      <span class="rotate-text">about us</span>
    </div>
    <ExperienceCard />
    <div class="second-card">
      <BestWebSites />
    </div>
  </div>
</template>

<script>
import ExperienceCard from "@/components/ExperienceCard";
import BestWebSites from "@/components/BestWebSites";
export default {
  name: "FourthSection",
  components: { BestWebSites, ExperienceCard },
  data() {
    return {
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
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-column-gap: 3rem;
  align-items: center;
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
