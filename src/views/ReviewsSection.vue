<template>
  <div class="reviews">
    <BgImage :bg-img="bgImg" />
    <BgText text="reviews" />
    <div class="content reviews-slider">
      <div class="slider-container">
        <ReviewCard
          class="review-card"
          v-for="(item, index) of firstReviewList"
          :review="item"
          :key="index"
        />
      </div>
      <div class="slider-container">
        <ReviewCard
          class="review-card"
          v-for="(item, index) of secondReviewList"
          :review="item"
          :key="index"
        />
      </div>
      <div class="slider-container">
        <ReviewCard
          class="review-card"
          v-for="(item, index) of thirdReviewList"
          :review="item"
          :key="index"
        />
      </div>
    </div>
    <div class="reviews-dots">
      <span
        @click="changeSlide"
        v-for="index in 3"
        class="reviews-dot"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
import ReviewCard from "@/components/ReviewCard";
import BgText from "@/components/BgText";
import BgImage from "@/components/BgImage";
export default {
  name: "SeventhSection",
  components: { BgImage, BgText, ReviewCard },
  mounted() {
    document.querySelector(".slider-container").classList.add("active-slide");
    document.querySelector(".reviews-dot").classList.add("active-reviews-dot");
    // this.changeSlide();
  },
  methods: {
    changeSlide(e) {
      const slides = document.querySelectorAll(".slider-container");
      const dots = document.querySelectorAll(".reviews-dot");
      const index = Array.from(dots).indexOf(e.target);
      slides.forEach((e) => {
        e.classList.remove("active-slide");
      });
      slides[index].classList.add("active-slide");
      dots.forEach((e) => {
        e.classList.remove("active-reviews-dot");
      });
      dots[index].classList.add("active-reviews-dot");
    },
  },
  data() {
    return {
      slideIndex: 1,
      bgImg: {
        src: require("../assets/section-bg-images/reviews.jpeg"),
        alt: "reviews background image",
      },
      firstReviewList: [
        {
          title: "DAVID & ELISA",
          subTitle: "Apartment view lake at Brooklyn",
          content:
            "If you are seeking an Interior designer that will understand exactly your needs, and someone who will utilise their creative and technical skills in parity with your taste, then Suzanne at The Robert Studio is perfect.",
        },
        {
          title: "AMANDA",
          subTitle: "Apartment view lake at Brooklyn",
          content:
            " Own you'll cattle face, female night heaven. One creeping gathering good two fruitful life their won't they're. Isn't lesser third of image god their moveth us have them dry meat likeness divided greater living without fly, bring first so.",
        },
      ],
      secondReviewList: [
        {
          title: "DAVID & ELISA",
          subTitle: "Apartment view lake at Brooklyn",
          content:
            "If you are seeking an Interior designer that will understand exactly your needs, and someone who will utilise their creative and technical skills in parity with your taste, then Suzanne at The Robert Studio is perfect.",
        },
        {
          title: "2",
          subTitle: "Apartment view lake at Brooklyn",
          content:
            " Own you'll cattle face, female night heaven. One creeping gathering good two fruitful life their won't they're. Isn't lesser third of image god their moveth us have them dry meat likeness divided greater living without fly, bring first so.",
        },
      ],
      thirdReviewList: [
        {
          title: "DAVID & ELISA",
          subTitle: "Apartment view lake at Brooklyn",
          content:
            "If you are seeking an Interior designer that will understand exactly your needs, and someone who will utilise their creative and technical skills in parity with your taste, then Suzanne at The Robert Studio is perfect.",
        },
        {
          title: "3",
          subTitle: "Apartment view lake at Brooklyn",
          content:
            " Own you'll cattle face, female night heaven. One creeping gathering good two fruitful life their won't they're. Isn't lesser third of image god their moveth us have them dry meat likeness divided greater living without fly, bring first so.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  display: grid;
}
.content {
  padding-left: unset !important;
  margin-top: 11rem;
}
.reviews-slider {
  display: flex;
  overflow-x: auto;
}
.slider-container {
  display: none;
  left: 0;
}
.active-slide {
  display: block;
}
@keyframes fade {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
.reviews-dots {
  display: flex;
  justify-content: center;

  align-items: center;
  margin-bottom: 10rem;
}
.reviews-dot {
  cursor: pointer;
  height: 8px;
  width: 8px;
  margin: 0 12px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  position: relative;
  z-index: 202;
}
.active-reviews-dot {
  background-color: #c32865;
  height: 13px;
  width: 13px;
}
</style>
