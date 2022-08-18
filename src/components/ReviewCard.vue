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
.content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 70px 0;
}
.content-left,
.content-right {
  padding: 0 10px;
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
  line-height: 2;
  font-weight: 300;
  letter-spacing: 0.11em;
  font-family: Poppins, sans-serif;
}
</style>
