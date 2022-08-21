<template>
  <div id="footer-container">
    <div class="left">
      <p>© Ramsay 2020.</p>
    </div>
    <div class="right">
      <a
        v-for="(item, index) of iconList"
        target="_blank"
        :href="item.href"
        :key="index"
      >
        <i :class="item.src"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      iconList: [
        {
          href: "#",
          src: "fa-brands fa-twitter",
          alt: "twitter",
        },
        {
          href: "#",
          src: "fa-brands fa-facebook-f",
          alt: "twitter",
        },
        {
          href: "#",
          src: "fa-brands fa-google-plus-g",
          alt: "twitter",
        },
        {
          href: "#",
          src: "fa-brands fa-linkedin",
          alt: "twitter",
        },
        {
          href: "#",
          src: "fa-solid fa-basketball",
          alt: "twitter",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#footer-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
}
.right {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
}
i {
  font-size: 1.2rem;
  transition: all 0.3s ease-out;
  &:hover {
    color: #c32865;
  }
}
a {
  padding-left: 2rem;
}
</style>
