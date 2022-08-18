<template>
  <div class="second-section">
    <div class="bg-text">
      <span class="rotate-text">What i do</span>
    </div>
    <div class="main-content">
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
      <h2>Download Resume</h2>
    </div>
  </div>
</template>

<script>
import SkillCard from "@/components/SkillCard";
export default {
  name: "SecondSection",
  components: { SkillCard },
};
</script>

<style lang="scss" scoped>
.second-section {
  padding: 0 2rem;
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
  padding-top: 2rem;
  z-index: 2;
  width: min-content;
  white-space: nowrap;
  &:hover {
    color: #c32865;
  }
}
.main-content {
  padding: 0 70px;
  position: relative;
}
</style>
