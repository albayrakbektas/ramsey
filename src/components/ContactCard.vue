<template>
  <div>
    <h1>
      <span>New York</span>
      <span>, USA</span>
    </h1>
    <h2>
      <span>166 Main Street, Beverly Hills, CA 90210</span>
    </h2>
    <div class="contact-hrefs">
      <a href="mailto:albayrakbektas44@gmail.com">contact@robert.com</a>
      <a href="tel:+96 56-85-1379">+96 56-85-1379</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactCard",
};
</script>

<style lang="scss" scoped>
.contact-hrefs {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  margin-top: 5rem;
  a {
    font-size: 1.51rem;
    &:hover {
      text-decoration: none;
      transition: all 0.4s ease-in 0s;
      color: #c32865;
    }
  }
}
a,
span {
  font-family: Montserrat, sans-serif;
}
h1 {
  span {
    font-size: 3.7rem;
  }
  span:first-child {
    color: #c32865;
  }
}
h2 {
  span {
    font-size: 1.7rem;
    color: #999999;
  }
}
</style>
