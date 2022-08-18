<template>
  <div class="skill-container">
    <span class="material-symbols-outlined">{{ skillIcon }}</span>
    <h4>
      <a href="#">{{ skillTitle }}</a>
    </h4>
    <p class="content">{{ skillContent }}</p>
  </div>
</template>

<script>
export default {
  name: "SkillCard",
  props: {
    skillIcon: {
      type: String,
      required: true,
      default: "New Skill Loading..",
    },
    skillTitle: {
      type: String,
      required: true,
      default: "New Skill Loading..",
    },
    skillContent: {
      type: String,
      required: true,
      default: "New Skill Loading..",
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: Poppins, sans-serif;
  font-size: 14px;
}
.material-symbols-outlined {
  color: #c32865;
  font-size: 65px;
}
a {
  font-size: 1.6rem;
  font-weight: 600;
  &:hover {
    color: #c32865;
    text-decoration: none;
  }
}
.content {
  color: #888888;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: left;
}
</style>
