<template>
  <div>
    <BgText text="my works" />
    <div class="content">
      <ProjectDetails
        v-for="(item, index) of projects"
        :project="item"
        :key="index"
      />
    </div>
    <div class="footer">
      <hr />
      <span> View all projects </span>
    </div>
  </div>
</template>

<script>
import ProjectDetails from "@/components/ProjectDetails";
import BgText from "@/components/BgText";
export default {
  name: "FifthSection",
  components: { BgText, ProjectDetails },
  data() {
    return {
      projects: [
        {
          number: "01",
          title: "Abstract Skat",
          subTitle: "Illustration",
          src: require("../assets/section-bg-images/resume-bg_1.jpeg"),
          alt: "as",
        },
        {
          number: "02",
          title: "Borato Prism",
          subTitle: "Branding",
          src: require("../assets/section-bg-images/resume-bg_1.jpeg"),
          alt: "as",
        },
        {
          number: "03",
          title: "Brole Mobile App",
          subTitle: "Mobile Design",
          src: require("../assets/section-bg-images/resume-bg_1.jpeg"),
          alt: "as",
        },
        {
          number: "04",
          title: "Bauhaus Studio",
          subTitle: "House Design",
          src: require("../assets/section-bg-images/resume-bg_1.jpeg"),
          alt: "as",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  gap: 40px;
}
.footer {
  display: grid;
  gap: 2vw;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
}
hr {
  margin: 0;
}
span {
  font-size: 1.8rem;
}
</style>
