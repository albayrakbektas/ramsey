<template>
  <div id="footer-container">
    <div class="left">
      <p>© Ramsay 2020.</p>
    </div>
    <FooterIcons />
  </div>
</template>

<script>
import FooterIcons from "@/components/FooterIcons";
export default {
  name: "AppFooter",
  components: { FooterIcons },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  p {
    //font-size: 0.9rem !important;
  }
}
#footer-container {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  height: 62.2px;
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
