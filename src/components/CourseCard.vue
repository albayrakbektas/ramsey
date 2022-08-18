<template>
  <div>
    <div class="course-title">
      <p>{{ course.title }}</p>
    </div>
    <div class="course-info">
      <p>{{ course.place }}</p>
      <p>{{ course.date }}</p>
    </div>
    <div class="course-content">
      <p>{{ course.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.course-title {
  p {
    font-size: 1.5rem;
  }
}
.course-info {
  p {
    font-style: italic;
  }
}
.course-content {
  p {
    font-size: 1.2rem;
  }
}
</style>
