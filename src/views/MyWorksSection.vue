<template>
  <div>
    <div class="bg-text">
      <span class="rotate-text">my works</span>
    </div>
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
export default {
  name: "FifthSection",
  components: { ProjectDetails },
  data() {
    return {
      projects: [
        {
          number: "01",
          title: "Abstract Skat",
          subTitle: "Illustration",
        },
        {
          number: "02",
          title: "Borato Prism",
          subTitle: "Branding",
        },
        {
          number: "03",
          title: "Brole Mobile App",
          subTitle: "Mobile Design",
        },
        {
          number: "04",
          title: "Bauhaus Studio",
          subTitle: "House Design",
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
  margin-left: 70px;
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
