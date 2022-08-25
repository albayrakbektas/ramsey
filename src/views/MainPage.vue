<template>
  <div>
    <div class="sections" @wheel="handleWheel">
      <FirstSection id="one" class="section active-section" />
      <SecondSection id="two" class="section" />
      <ThirdSection id="three" class="section" />
      <FourthSection id="four" class="section" />
      <FifthSection id="five" class="section" />
      <SixthSection id="six" class="section section-none" />
      <SeventhSection id="seven" class="section section-none" />
      <ArticlesSection id="eight" class="section section-none" />
      <ContactSection id="nine" class="section section-none" />
    </div>
    <div class="dots">
      <span
        class="w3-badge demo w3-border w3-hover-white one active-dot"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white two"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white three"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white four"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white five"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white six"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white seven"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white eight"
        @click="dotEvent"
      ></span>
      <span
        class="w3-badge demo w3-border w3-hover-white nine"
        @click="dotEvent"
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
  created() {
    window.addEventListener("scroll", this.updateScroll);
  },
  mounted() {
    document.addEventListener("wheel", this.handleWheel);
    window.addEventListener("scroll", this.updateScroll);
  },
  beforeMount() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      const section = document.querySelector(".active-section");
      console.log(section.scrollTop);
      if (window.scrollY > 0) {
        this.$store.state.isScrolled = true;
      }
    },
    dotEvent(e) {
      if (this.$store.state.isMenuOpen) {
        return;
      }
      const activeDot = document.querySelector(".active-dot");
      const dots = document.querySelectorAll(".demo");
      let index = Array.from(dots).indexOf(e.target);
      activeDot.classList.remove("active-dot");
      e.target.classList.add("active-dot");
      const sections = document.querySelectorAll(".section");
      const activeSection = document.querySelector(".active-section");
      sections.forEach((e) => {
        e.style.transform = "translate3d(0px, 0px, 0px)";
      });
      for (let i = 0; i < index; i++) {
        sections[i].style.transform = "translate3d(0px, -100vh, 0px)";
      }
      activeSection.classList.remove("active-section");
      sections[index].classList.add("active-section");
    },
    handleWheel(e) {
      if (this.$store.state.isMenuOpen) {
        return;
      }
      if (this.counter > 0) {
        return;
      }
      if (e.deltaX !== 0) {
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

      let activeClass = activeSection.id;
      let firstDot = document.querySelector(".one");
      let dots = document.querySelectorAll(".demo");
      let activeDot = document.querySelector(`.${activeClass}`);
      let nextDotSibling = activeDot.nextElementSibling
        ? activeDot.nextElementSibling
        : null;
      let prevDotSibling = activeDot.previousElementSibling;
      activeDot.classList.remove("active-dot");

      if (e.deltaY > 0) {
        if (activeSection.id === "nine") {
          sections.forEach((e) => {
            e.style.transform = "translate3d(0px, 0%, 0px)";
          });
          dots.forEach((e) => {
            e.classList.remove("active-dot");
          });
          firstSection.classList.add("active-section");
          firstDot.classList.add("active-dot");
        } else {
          activeSection.style.transform = "translate3d(0px, -100vh, 0px)";
          nextSibling.classList.add("active-section");
          // activeDot.nextElementSibling.classList.add("active-dot");
          nextDotSibling.classList.add("active-dot");
        }
      } else if (e.deltaY < 0) {
        if (activeSection.id === "one") {
          activeSection.classList.add("active-section");
          activeDot.classList.add("active-dot");
          nextDotSibling.classList.remove("active-dot");
        } else {
          prevSibling.classList.add("active-section");
          prevSibling.style.transform = "translate3d(0px, 0px, 0px)";
          prevDotSibling.classList.add("active-dot");
          nextDotSibling.classList.remove("active-dot");
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
@media (max-width: 500px) {
  .w3-white,
  .w3-hover-white:hover {
    background-color: #c32865 !important;
  }
}
.section {
  display: grid !important;
}
.active-section {
  display: grid !important;
}
.section-none {
  display: none !important;
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
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #1b1b1b;
  backface-visibility: hidden;
  transform: translate3d(0px, 0px, 0px);
  transition: all 1s cubic-bezier(0.55, 0.085, 0, 0.99);
  display: grid;
  align-items: center;
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
  background-color: #fff;
}
.dots {
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  gap: 2rem;
  position: absolute;
  right: calc(5rem + 6.4px);
  top: calc(50% - 11rem);
  z-index: 99;
}
.active-dot {
  background-color: #c32865;
  height: 12.8px;
  width: 12.8px;
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
