<template>
  <div class="container-xy">
    <div class="container-y">
      <BgImage :bg-img="$store.state.bgImgList[$store.state.bgImgIndex]" />
      <BgText text="my works" />
      <div class="content">
        <div v-for="(item, index) of projects" :key="index">
          <ProjectDetails :project="item" />
        </div>
      </div>
      <div class="footer">
        <hr />
        <span> View all projects </span>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDetails from "@/components/ProjectDetails";
import BgText from "@/components/BgText";
import BgImage from "@/components/BgImage";
export default {
  name: "FifthSection",
  components: { BgImage, BgText, ProjectDetails },
  mounted() {
    console.log(window.scrollX);
  },
  data() {
    return {
      slideIndex: 0,
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
@media (max-width: 500px) {
  .content {
    padding: 12rem 0 7rem 0 !important;
    margin-top: 0 !important;
    &:nth-of-type(1) {
      margin-top: 3rem !important;
    }
    &:first-child {
      margin-top: 0 !important;
    }
  }
}
.container-xy {
  height: 100%;
  overflow-y: hidden;
}
.container-y {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
}
.content {
  gap: 40px;
  padding: 0;
  margin-top: 8rem;
}
.footer {
  display: grid;
  gap: 2vw;
  grid-template-columns: auto 1fr;
  align-items: center;
  width: 100vw;
  padding: 2rem 0 4rem;
}
.footer-position {
  height: 62.2px;
}
.bg-img {
  height: calc(100vh + 63px);
  width: calc(100vw - 8px);
}
hr {
  margin: 0;
  width: 22vw;
}
span {
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #c32865;
  }
}
</style>
