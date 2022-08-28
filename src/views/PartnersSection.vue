<template>
  <div class="partners-section">
    <BgText text="partners" />
    <div class="content">
      <div>
        <h1><span>Trusted</span> from Clients</h1>
      </div>
      <ul class="logo-grid">
        <li v-for="(item, index) of logoList" :key="index">
          <img :src="item.url" :alt="item.alt" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BgText from "@/components/BgText";
export default {
  name: "SixthSection",
  components: { BgText },
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
  padding: 0 0 0 70px !important;
}
.logo-grid {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-gap: 5rem;
  margin: 0;
  padding: 0;
  list-style-type: none;
  grid-template-columns: repeat(4, 1fr);
}
h1 {
  padding: 40px 0;
  font-size: 4.5rem;
  span {
    color: #c32865;
  }
}
li {
  padding-right: 3rem;
}
img {
  padding: 10px;
  opacity: 0.5;
  &:hover {
    transition: all 0.4s ease-in 0s;
    opacity: 1;
  }
}
@media (max-width: 500px) {
  .content {
    padding: 0 3rem !important;
    height: 100vh;
  }
  .logo-grid {
    grid-template-columns: 1fr !important;
    padding-bottom: 6rem;
  }
  li {
    justify-self: center;
    padding-right: 0 !important;
  }
  h1 {
    padding: 10rem 0 5rem !important;
    font-size: 3rem !important;
  }
}
</style>
