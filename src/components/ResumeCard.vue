<template>
  <div class="resume-card">
    <div class="resume-type">
      <h1>{{ resumeType }}</h1>
    </div>
    <div class="resume-content">
      <CourseCard :course="course" />
      <CourseCard :course="course" />
    </div>
  </div>
</template>

<script>
import CourseCard from "@/components/CourseCard";
export default {
  name: "ResumeCard",
  components: { CourseCard },
  props: {
    resumeType: {
      type: String,
      required: true,
    },
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.resume-card {
  position: relative;
  padding: 3.75rem;
  background-color: rgba(255, 255, 255, 0.1);
  height: fit-content;
  width: 95%;
  &:hover {
    background-color: #c32865;
  }
}
.resume-type {
  position: absolute;
  z-index: 2;
  top: -4.5rem;
  left: 5%;
}
h1 {
  color: #ffffff;
  font-size: 3rem;
}
</style>
