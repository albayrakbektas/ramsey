<template>
  <div id="header-container">
    <div>
      <img
        alt="Name logo"
        src="http://paul-themes.com/wordpress/ramsay/wp-content/uploads/2020/01/logo.png"
      />
    </div>
    <div class="mid">
      <a href="tel:+905050070844">
        <span> +96 </span>
        <span> 56-85-13-79 </span>
      </a>
      <div>
        <span class="slash"> / </span>
      </div>
      <a href="mailto:albayrakbektas44@gmail.com">
        <span> contact@robert.com </span>
      </a>
    </div>
    <div>
      <div>
        <span class="material-symbols-outlined menu-icon"> menu </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
#header-container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-content: space-between;
  height: 70px;
}
img {
  height: 40px;
  cursor: pointer;
}
.mid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 2rem;
}
.slash {
  color: #808080;
}
.menu-icon {
  cursor: pointer;
  font-size: 24px;
  font-weight: bolder;
  &:hover {
    color: #c32865;
  }
}
span {
}
</style>
