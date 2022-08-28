<template>
  <div class="container">
    <BgText text="What i do" />
    <div @scroll="updateScroll" class="section-content-container">
      <div class="content main-content">
        <h1><span class="purple">My</span> specialization</h1>
        <div class="cards">
          <SkillCard
            skill-content="Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through."
            skill-icon="devices"
            skill-title="WEB DESIGN"
          />
          <SkillCard
            skill-content="Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through."
            skill-icon="developer_mode"
            skill-title="MOBILE CODING"
          />
          <SkillCard
            skill-content="Working with client and community, we deliver masterplans that create vibrant new places and spaces, attract people, and encourage investment through."
            skill-icon="diamond"
            skill-title="ILLUSTRATION"
          />
        </div>
      </div>
      <div class="bottom-link">
        <hr class="hr" />
        <h2 class="h2">Download Resume</h2>
      </div>
    </div>
  </div>
</template>

<script>
import SkillCard from "@/components/SkillCard";
import BgText from "@/components/BgText";
export default {
  name: "SecondSection",
  components: { BgText, SkillCard },
  methods: {
    updateScroll() {
      const div = document.querySelector(".section-content-container");
      console.log(div.scrollHeight, div.scrollTop);
      this.$store.state.isScrolled = true;
      if (div.scrollTop > 310) {
        this.$store.state.isScrolled = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .container {
    min-height: 100vh !important;
    padding: 0 !important;
  }
  .content {
    overflow-y: hidden !important;
  }
  .cards {
    grid-template-columns: 1fr !important;
    gap: 2rem;
    padding-top: 2rem !important;
  }
  h1 {
    font-size: 2.5rem !important;
    text-align: center;
  }
  .main-content {
    margin-top: 70px !important;
    padding: 0 2rem !important;
  }
  .bottom-link {
    margin: 2rem 0 6rem 0 !important;
  }
  .hr {
    width: 15vw !important;
    position: unset !important;
  }
  h2 {
    padding-left: 5vw !important;
    font-family: Montserrat, sans-serif !important;
  }
  .section {
    align-items: unset !important;
  }
}
.section {
  align-content: center;
}
h1 {
  font-size: 4rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10rem;
  padding-top: 5rem;
}
h2 {
  cursor: pointer;
  z-index: 202;
  width: min-content;
  white-space: nowrap;
  align-self: end;
  &:hover {
    color: #c32865;
  }
}
.main-content {
  padding: 0 70px;
  margin-top: 70px;
  position: relative;
  grid-template-rows: auto 1fr;
  align-items: end;
}
.hr {
  width: 10vw !important;
}
</style>
