<template>
  <div>
    <div class="sections" @click="handleWheel">
      <FirstSection id="one" class="section active-section" />
      <SecondSection id="two" class="section" />
      <ThirdSection id="three" class="section" />
      <FourthSection id="four" class="section" />
      <FifthSection id="five" class="section" />
      <SixthSection id="six" class="section" />
      <SeventhSection id="seven" class="section" />
      <ArticlesSection id="eight" class="section" />
      <ContactSection id="nine" class="section" />
    </div>
    <div class="dots">
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(1)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(2)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(3)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(4)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(5)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(6)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(7)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(8)"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white"
        @click="currentDiv(9)"
      ></span>
    </div>
  </div>
</template>

<script>
import FourthSection from "@/views/AboutUsSection";
import FirstSection from "@/views/MeSection";
import SecondSection from "@/views/WhatIDoSection";
import ThirdSection from "@/views/ResumeSection";
import FifthSection from "@/views/MyWorksSection";
import SixthSection from "@/views/PartnersSection";
import SeventhSection from "@/views/ReviewsSection";
import ArticlesSection from "@/views/ArticlesSection";
import ContactSection from "@/views/ContactSection";
export default {
  name: "MainPage",
  components: {
    ContactSection,
    ArticlesSection,
    SeventhSection,
    SixthSection,
    FifthSection,
    ThirdSection,
    SecondSection,
    FirstSection,
    FourthSection,
  },
  data() {
    return {
      slideIndex: 1,
      counter: 0,
    };
  },
  mounted() {
    document.addEventListener("wheel", this.handleWheel);
  },
  methods: {
    handleWheel(e) {
      if (this.counter > 0) {
        return;
      }
      let firstSection = document.querySelector("#one");
      let sections = document.querySelectorAll(".section");
      let activeSection = document.querySelector(".active-section");
      let nextSibling = activeSection.nextElementSibling
        ? activeSection.nextElementSibling
        : null;
      let prevSibling = activeSection.previousElementSibling;
      activeSection.classList.remove("active-section");
      if (e.deltaY > 0) {
        if (activeSection.id === "eight") {
          sections.forEach((e) => {
            e.style.transform = "translate3d(0px, 0%, 0px)";
          });
          firstSection.classList.add("active-section");
        } else {
          activeSection.style.transform = "translate3d(0px, -100%, 0px)";
          nextSibling.classList.add("active-section");
        }
      } else if (e.deltaY < 0) {
        console.log(activeSection.id);
        if (activeSection.id === "one") {
          activeSection.classList.add("active-section");
        } else {
          prevSibling.classList.add("active-section");
          prevSibling.style.transform = "translate3d(0px, 0px, 0px)";
        }
      }
      this.counter++;
      setTimeout(() => {
        this.counter = 0;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.back-section {
  transform: translate3d(0px, -100%, 0px);
}
.sections {
  padding: 0 8rem;
  overflow-y: scroll;
  height: 100vh;
}
.sections::-webkit-scrollbar {
  display: none;
}
.section {
  position: absolute;
  height: calc(100vh - 70px - 2rem);
  width: 100%;
  left: 0;
  top: calc(70px + 2rem) !important;
  background-color: #1b1b1b;
  backface-visibility: hidden;
  transform: translate3d(0px, 0px, 0px);
  transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
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
  grid-template-rows: repeat(9, 1fr);
  justify-self: center;
  gap: 1rem;
  position: absolute;
  right: calc(5rem - (13px / 2));
  top: calc(50% - 6rem);
  z-index: 99;
}
.w3-transparent {
  background-color: unset !important;
}
#one {
  z-index: 9;
}
#two {
  z-index: 8;
}
#three {
  z-index: 7;
}
#four {
  z-index: 6;
}
#five {
  z-index: 5;
}
#six {
  z-index: 4;
}
#seven {
  z-index: 3;
}
#eight {
  z-index: 2;
}
#nine {
  z-index: 1;
}
</style>
