<template>
  <div class="project-details">
    <div class="project-number">
      <span>{{ project.number }}</span>
    </div>
    <div class="project-content">
      <div class="project-title">
        <span class="title">{{ project.title }}</span>
      </div>
      <div class="project-sub-title">
        <span>{{ project.subTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  color: #fff;
  opacity: 0.5;
  font-weight: bold;
  display: grid;
  align-items: center;
  height: 100%;
}
.project-details {
  display: grid;
  grid-template-columns: 1fr 3fr;
  &:hover {
    span {
      transition: all 0.4s ease-in 0s;
      opacity: 1;
      &.title {
        transition: all 0.4s ease-in 0s;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        cursor: pointer;
      }
    }
  }
}
.project-content {
  display: grid;
  grid-template-rows: 1fr auto;
}
.project-title {
  span {
    font-size: 5rem;
  }
}
</style>
