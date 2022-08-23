<template>
  <div class="third-section">
    <BgImage :bg-img="bgImg" />
    <BgText text="Resume" />
    <div class="content">
      <ResumeCard resume-type="Education" :course="course" />
      <ResumeCard resume-type="Education" :course="course" />
    </div>
  </div>
</template>

<script>
import ResumeCard from "@/components/ResumeCard";
import BgText from "@/components/BgText";
import BgImage from "@/components/BgImage";
export default {
  name: "ThirdSection",
  components: { BgImage, BgText, ResumeCard },
  data() {
    return {
      bgImg: {
        src: require("../assets/section-bg-images/resume-bg_1.jpeg"),
        alt: "resume background image",
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
  overflow-y: scroll;
  overflow-x: hidden;
}
.content {
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
  :nth-last-child(1) {
    margin-top: 2rem;
  }
}
.bg-img {
  height: calc(100% + 15rem);
}
ResumeCard {
  margin-top: 2rem;
  //display: none;
}
.second-card {
  padding-top: 2rem;
}
</style>
