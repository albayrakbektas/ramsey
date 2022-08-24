<template>
  <div class="icon-container">
    <a
      v-for="(item, index) of this.$store.state.iconList"
      target="_blank"
      :href="item.href"
      :key="index"
    >
      <i class="icon-link" :class="item.src"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "FooterIcons",
};
</script>

<style lang="scss" scoped>
@media (max-width: 500px) {
  a {
    padding: 0 0 0 0.5rem !important;
  }
  i {
    color: #fff !important;
  }
}
.icon-container {
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
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
  padding-right: 2rem;
}
</style>
