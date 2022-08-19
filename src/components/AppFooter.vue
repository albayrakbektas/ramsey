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
        <img :src="item.src" :alt="item.alt" />
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
          src: require("../assets/footer-icons/twitter.png"),
          alt: "twitter",
        },
        {
          href: "#",
          src: require("../assets/footer-icons/twitter.png"),
          alt: "twitter",
        },
        {
          href: "#",
          src: require("../assets/footer-icons/twitter.png"),
          alt: "twitter",
        },
        {
          href: "#",
          src: require("../assets/footer-icons/twitter.png"),
          alt: "twitter",
        },
        {
          href: "#",
          src: require("../assets/footer-icons/twitter.png"),
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
img {
  height: 1.5rem;
  width: 1.5rem;
  &:hover {
    color: #c32865;
  }
}
a {
  padding-left: 2rem;
}
</style>
