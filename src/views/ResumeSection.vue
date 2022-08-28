<template>
  <div class="section-container">
    <div class="third-section">
      <div class="bg-abs-img"></div>
      <BgText text="resume" />
      <div class="content">
        <ResumeCard resume-type="Education" :course="course" />
        <ResumeCard resume-type="Education" :course="course" />
      </div>
    </div>
  </div>
</template>

<script>
import ResumeCard from "@/components/ResumeCard";
import BgText from "@/components/BgText";
// import BgImage from "@/components/BgImage";
export default {
  name: "ThirdSection",
  components: { BgText, ResumeCard },
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .bg-abs-img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(0, 0, 0, 0.4) !important;
    background-image: url("../assets/section-bg-images/resume-bg_1.jpeg");
    background-size: cover;
    background-position: center;
  }
  .third-section {
    position: relative;
    padding: 5rem 0 8rem;
    align-self: start;
  }
  .content {
    grid-template-columns: 1fr !important;
    grid-template-rows: repeat(2, 1fr) !important;
    padding: 0 2rem !important;
    margin-top: 5rem !important;
  }
  img {
    height: 100%;
  }
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
