<template>
  <div
    class="sub-content"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="content-top">
      <div>
        <span class="title">{{ article.title }}</span>
      </div>
      <div class="sub-title">
        <span class="date">{{ article.date }}</span>
        <span> / </span>
        <span class="topic">{{ article.topic }}</span>
      </div>
    </div>
    <div class="content-bottom">
      <span class="text">{{ article.content }}</span>
    </div>
    <div :class="{ 'div-hover': hover }" class="hr"></div>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.sub-content {
  display: grid;
  margin-top: 2rem;
}
.content-bottom {
  margin-top: 2rem;
  padding-bottom: 2rem;
}
.div-hover {
  width: 92% !important;
  float: left;
}
.title {
  font-size: 1.4rem;
  line-height: 1.3;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
}
.sub-title {
  margin-top: 2rem;
}
.date,
.topic,
.text {
  font-size: 1.1rem;
  font-weight: 400;
  font-family: Poppins, sans-serif;
  font-style: italic;
}
.text {
  font-style: normal;
  color: #888888;
  letter-spacing: 0.1em;
  line-height: 1.8;
}
.topic,
.title {
  &:hover {
    color: #c32865;
    cursor: pointer;
  }
}
.hr {
  width: 0;
  height: 1px;
  background-color: #ffffff;
  transition: width 0.3s ease-out;
}
</style>
