<template>
  <div class="third-section">
    <div class="bg-text">
      <span class="rotate-text">Resume</span>
    </div>
    <ResumeCard resume-type="Education" :course="course" />
    <div class="second-card">
      <ResumeCard resume-type="Education" :course="course" />
    </div>
  </div>
</template>

<script>
import ResumeCard from "@/components/ResumeCard";
export default {
  name: "ThirdSection",
  components: { ResumeCard },
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
  overflow-y: scroll;
}
.second-card {
  padding-top: 2rem;
}
</style>
