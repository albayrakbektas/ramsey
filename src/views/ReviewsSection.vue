<template>
  <div>
    <BgImage :bg-img="bgImg" />
    <BgText text="partners" />
    <div class="content slider">
      <ReviewCard
        class="review-card"
        v-for="(item, index) of firstReviewList"
        :review="item"
        :key="index"
      />
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
  methods: {},
};
</script>

<style lang="scss" scoped>
.w3-left,
.w3-right,
.w3-badge {
  cursor: pointer;
}
.w3-badge {
  height: 8px;
  width: 8px;
  padding: 0;
  margin: auto;
}
.dots {
  display: grid;
  justify-self: center;
  gap: 1rem;
  position: absolute;
  right: 50%;
  bottom: 0;
  z-index: 5;
  transform: rotate(90deg);
}
.w3-transparent {
  background-color: unset !important;
}
.active {
  color: #c32865;
  background: #c32865;
  height: 13px;
  width: 13px;
}
</style>
