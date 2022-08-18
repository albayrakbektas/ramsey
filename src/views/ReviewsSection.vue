<template>
  <div class="con">
    <div class="bg-text">
      <span class="rotate-text">partners</span>
    </div>
    <div class="content slider">
      <ReviewCard
        class="review-card"
        v-for="(item, index) of firstReviewList"
        :review="item"
        :key="index"
      />
    </div>
    <div class="content slider">
      <ReviewCard
        class="review-card"
        v-for="(item, index) of secondReviewList"
        :review="item"
        :key="index"
      />
    </div>
    <div class="content slider">
      <ReviewCard
        class="review-card"
        v-for="(item, index) of thirdReviewList"
        :review="item"
        :key="index"
      />
    </div>
    <!--    <div class="dots">-->
    <!--      <span-->
    <!--        class="w3-badge demo w3-border w3-hover-white"-->
    <!--        @click="currentDiv(1)"-->
    <!--      ></span>-->
    <!--      <span-->
    <!--        class="w3-badge demo w3-border w3-hover-white"-->
    <!--        @click="currentDiv(2)"-->
    <!--      ></span>-->
    <!--      <span-->
    <!--        class="w3-badge demo w3-border w3-hover-white"-->
    <!--        @click="currentDiv(3)"-->
    <!--      ></span>-->
    <!--    </div>-->
  </div>
</template>

<script>
import ReviewCard from "@/components/ReviewCard";
export default {
  name: "SeventhSection",
  components: { ReviewCard },
  data() {
    return {
      slideIndex: 1,
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
  // mounted() {
  //   this.showDivs(this.slideIndex);
  // },
  methods: {
    //   plusDivs(n) {
    //     this.showDivs((this.slideIndex += n));
    //   },
    //   currentDiv(n) {
    //     this.showDivs((this.slideIndex = n));
    //   },
    //   showDivs(n) {
    //     let i;
    //     let x = document.getElementsByClassName("slider");
    //     let dots = document.getElementsByClassName("demo");
    //     if (n > x.length) {
    //       this.slideIndex = 1;
    //     }
    //     if (n < 1) {
    //       this.slideIndex = x.length;
    //     }
    //     for (i = 0; i < x.length; i++) {
    //       x[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //       dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     x[this.slideIndex - 1].style.display = "grid";
    //     dots[this.slideIndex - 1].className += " active";
    //   },
  },
};
</script>

<style lang="scss" scoped>
.con {
  display: none;
}
.content {
  padding: 0 70px;
  animation: ease 1s;
}
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
