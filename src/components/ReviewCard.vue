<template>
  <div class="review">
    <hr />
    <div class="content">
      <div class="content-left">
        <div>
          <span class="title">{{ review.title }}</span>
        </div>
        <div>
          <span class="subTitle">{{ review.subTitle }}</span>
        </div>
      </div>
      <div class="content-right">
        <span class="text">{{ review.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .content,
  .content-left {
    grid-template-columns: 1fr !important;
  }
  .content-right {
    padding-top: 1rem !important;
  }
}
.review {
  margin-left: 20px;
}
.content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 20px 0 40px;
}
.content-left,
.content-right {
  padding: 0;
}
.title {
  font-size: 1.6rem;
  line-height: 2;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
}
.subTitle {
  font-size: 1.1rem;
  font-style: italic;
  font-family: Poppins, sans-serif;
}
.text {
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: 300;
  letter-spacing: 0.11em;
  font-family: Poppins, sans-serif;
  padding-right: 30px;
}
</style>
