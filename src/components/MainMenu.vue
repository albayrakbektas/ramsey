<template>
  <div class="main-menu">
    <div class="exit">
      <i @click="closeMenu" class="fa-regular fa-x"></i>
    </div>
    <nav>
      <ul>
        <li
          @click="changeSection"
          v-for="(item, index) of itemList"
          :key="index"
        >
          <router-link
            :class="`menu-link ${index.toString()}`"
            :to="item.href"
            >{{ item.text }}</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="menu-footer">
      <FooterIcons />
      <p>© Robert 2020. All Rights Reseverd.</p>
    </div>
  </div>
</template>

<script>
import FooterIcons from "@/components/FooterIcons";
export default {
  name: "MainMenu",
  components: { FooterIcons },
  data() {
    return {
      itemList: [
        {
          text: "Home",
          href: "#",
        },
        {
          text: "Specialization",
          href: "#",
        },
        {
          text: "Resume",
          href: "#",
        },
        {
          text: "About",
          href: "#",
        },
        {
          text: "Partners",
          href: "#",
        },
        {
          text: "Projects",
          href: "#",
        },
        {
          text: "Reviews",
          href: "#",
        },
        {
          text: "Articles",
          href: "#",
        },
        {
          text: "Contact",
          href: "#",
        },
      ],
    };
  },
  methods: {
    closeMenu() {
      this.$store.state.isMenuOpen = false;
      document.querySelector(".main-menu").classList.remove("opened-menu");
      document.querySelector(".main-menu").classList.add("closed-menu");
    },
    changeSection(e) {
      this.closeMenu();
      const activeDot = document.querySelector(".active-dot");
      const dots = document.querySelectorAll(".demo");
      const sections = document.querySelectorAll(".section");
      const activeSection = document.querySelector(".active-section");
      const links = document.querySelectorAll("li > a");
      let index = Array.from(links).indexOf(e.target);
      links.forEach((e) => {
        e.classList.remove("active-link");
      });
      sections.forEach((e) => {
        e.style.transform = "translate3d(0px, 0px, 0px)";
      });
      for (let i = 0; i < index; i++) {
        sections[i].style.transform = "translate3d(0px, -100vh, 0px)";
      }
      e.target.classList.add("active-link");
      activeDot.classList.remove("active-dot");
      dots[index].classList.add("active-dot");
      activeSection.classList.remove("active-section");
      sections[index].classList.add("active-section");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0;
  background-color: #1b1b1b;
  padding: 3rem 4rem;
  display: grid;
  align-items: center;
  transform: translateX(100%);
  transition: linear 500ms;
  -webkit-transition: linear 500ms;
  z-index: 111;
}
nav {
  height: 70%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
ul {
  padding-inline-start: 0 !important;
}
li {
  padding: 1rem 0 !important;
}
::-webkit-scrollbar {
  background-color: #1b1b1b;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #c32865;
}
i {
  color: #fff;
  font-size: 24px;
  transition: all 0.3s ease-out;
  float: right;
  &:hover {
    color: #c32865;
  }
}
a {
  font-size: 1.7rem;
  color: #636363;
  transition: all 0.3s ease-out;
  font-weight: bold;
  &:hover {
    text-decoration: none !important;
    color: #fff;
  }
}
.menu-footer {
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 60%;
  margin-bottom: 3rem;
  * {
    padding-bottom: 2rem;
  }
}
p {
  color: #fff;
  font-weight: bold;
}
.active-link {
  color: #fff;
}
</style>
