<template>
  <div class="project-details">
    <div class="project-number">
      <span>{{ project.number }}</span>
    </div>
    <div class="project-content">
      <div class="project-title">
        <div class="project-title-hr">
          <span @mouseover="changeBg" class="title">{{ project.title }}</span>
          <hr />
        </div>
      </div>
      <div class="project-sub-title">
        <span>{{ project.subTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    document
      .querySelector(".project-title-hr > span.title")
      .classList.add("active-item");
    document.querySelector(".project-title-hr > hr").classList.add("active-hr");
  },
  methods: {
    changeBg(e) {
      const item = document.querySelector(".active-item");
      item.classList.remove("active-item");
      item.nextElementSibling.classList.remove("active-hr");
      e.target.classList.add("active-item");
      e.target.nextElementSibling.classList.add("active-hr");
      const items = document.querySelectorAll(".project-title-hr > .title");
      for (let i = 0; i < items.length; i++) {
        if (items[i].className === "title active-item") {
          this.$store.state.bgImgIndex = i;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  .project-details {
    padding: 0 2rem;
    grid-template-columns: auto 1fr !important;
    align-items: center;
  }
  .project-number {
    display: grid;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    span {
      font-size: 1.2rem !important;
      display: unset !important;
      height: unset !important;
    }
  }
  .title {
    font-size: 2.5rem !important;
  }
  .project-sub-title {
    &span {
      font-size: 1rem !important;
    }
  }
}
span {
  color: #fff;
  opacity: 0.5;
  font-weight: bold;
  display: grid;
  align-items: center;
  height: 100%;
}
hr {
  position: absolute;
  left: 0;
  top: calc(50% - 1rem);
  width: 0;
}
.project-details {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.active-item {
  transition: all 0.4s ease-in 0s;
  opacity: 1;
}
.title {
  transition: all 0.4s ease-in 0s;
  cursor: pointer;
}
.active-hr {
  width: 100%;
  height: 1px;
  transition: width 0.5s;
  float: right;
}
.project-content {
  display: grid;
  grid-template-rows: 1fr auto;
}
.project-title {
  span {
    font-size: 5rem;
  }
}
.project-title-hr {
  position: relative;
  width: fit-content;
}
</style>
