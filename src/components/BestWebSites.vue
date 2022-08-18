<template>
  <div class="fourth-right-container">
    <h1>
      <span>The best</span>
      <span>websites</span>
    </h1>
    <p>
      From tree make green multiply, great greater is. Fruit fowl blessed. Unto
      of man greater spirit you’ll beginning.
    </p>
    <div class="range-bars">
      <RangeBar title="Mobile Design" percent="90" />
      <RangeBar title="Coding" percent="70" />
      <RangeBar title="Web Design" percent="80" />
    </div>
  </div>
</template>

<script>
import RangeBar from "@/components/RangeBar";
export default {
  name: "BestWebSites",
  components: { RangeBar },
};
</script>

<style lang="scss" scoped>
.fourth-right-container {
  display: grid;
  align-content: space-evenly;
  height: 100%;
}
h1 {
  margin-block-start: 0;
  span {
    font-size: 3.5rem;
  }
  span:first-child {
    color: #c32865;
  }
}
span::after {
  content: " ";
}
p {
  color: #888888;
  font-size: 14px;
  line-height: 2;
  font-family: Poppins, sans-serif;
}
</style>
