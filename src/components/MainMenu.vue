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
      <p>© Robert 2020. All Rights Reserved.</p>
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
          text: "Projects",
          href: "#",
        },
        {
          text: "Partners",
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
      document.querySelector("nav").style.transform = "translateY(100px)";
      document.querySelector(".menu-footer").style.transform =
        "translateY(100px)";
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
@media (max-width: 500px) {
  .main-menu {
    width: 100vw !important;
    grid-template-rows: repeat(3, auto);
    padding: 3rem 1.5rem 0 2.9rem !important;
  }
  nav {
    height: 85% !important;
    margin-top: 1rem !important;
    align-self: center;
  }
  .exit {
    i {
      font-size: 24px !important;
    }
  }
  li {
    padding: 1.25rem 0 !important;
    &:first-child {
      padding: 0 0 1.25rem !important;
    }
  }
  .menu-footer {
    justify-content: start;
  }
  a.menu-link {
    font-size: 20px !important;
  }
  i {
    font-size: 17px !important;
  }
  p {
    font-size: 12px;
    font-family: Poppins, sans-serif;
  }
  .menu-footer {
    width: 100% !important;
  }
}
nav,
.menu-footer {
  transform: translateY(100px);
}
.main-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 0;
  background-color: #1b1b1b;
  padding: 3rem 4.5rem;
  display: grid;
  align-items: center;
  transform: translateX(100%);
  transition: linear 300ms;
  -webkit-transition: linear 300ms;
  z-index: 111;
}
nav {
  height: 70%;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  transition: 1s;
  -webkit-transition: 1s;
}
ul {
  margin-block-start: 0 !important;
  padding-inline-start: 0;
}
li {
  padding: 1rem 0;
  &:first-child {
    padding: 0 0 1rem;
  }
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
  margin-top: 3rem;
  margin-bottom: 1rem;
  transition: linear 2s;
  -webkit-transition: linear 2s;
  * {
    padding-bottom: 2rem;
  }
  p {
    //margin-block-end
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
