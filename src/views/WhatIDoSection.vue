<template>
  <div class="container">
    <BgText text="What i do" />
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
</template>

<script>
import SkillCard from "@/components/SkillCard";
import BgText from "@/components/BgText";
export default {
  name: "SecondSection",
  components: { BgText, SkillCard },
  created() {
    // document.querySelector(".hr").classList.add("active");
  },
};
</script>

<style lang="scss" scoped>
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
  z-index: 2;
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
</style>
