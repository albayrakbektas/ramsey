<template>
  <div>
    <div class="bg-text">
      <span class="rotate-text">partners</span>
    </div>
    <div class="content">
      <div>
        <h1><span>Trusted</span> from Clients</h1>
      </div>
      <div class="logo-grid">
        <img
          v-for="(item, index) of logoList"
          :src="item.url"
          :alt="item.alt"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SixthSection",
  data() {
    return {
      logoList: [
        {
          url: require("../assets/clients/blb.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/cw.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/sh.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/acg.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/csfti.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/alpa.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/neu.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/papi.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/gh.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/fr.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/bh.png"),
          alt: "",
        },
        {
          url: require("../assets/clients/oak.png"),
          alt: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-left: 70px;
}
.logo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 50px;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
}
h1 {
  padding: 40px 0;
  font-size: 4.5rem;
  span {
    color: #c32865;
  }
}
img {
  padding: 10px;
  opacity: 0.5;
  &:hover {
    transition: all 0.4s ease-in 0s;
    opacity: 1;
  }
}
</style>
