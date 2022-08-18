<template>
  <div>
    <form>
      <div class="form-top">
        <label>
          <input placeholder="Name" />
        </label>
        <label>
          <input placeholder="Email" />
        </label>
      </div>
      <label>
        <input placeholder="Subject(Optional)" />
      </label>
      <textarea placeholder="Message" cols="40" rows="6"></textarea>
      <button>Contact me</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="scss" scoped>
.form-top {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
}
input,
textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #2f2f2f;
  -webkit-box-shadow: 0 0 2.08333rem rgb(0 0 0 / 50%);
  border: none;
  color: #fff;
  outline: 0;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}
textarea {
  overflow: auto;
  resize: vertical;
}
button {
  padding: 1rem 2.333rem;
  color: #fff;
  background-color: #c32865;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.025em;
  line-height: 1.5;
  text-transform: none;
  border: none;
  outline: 0;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  &:hover {
    background-color: #e02f7b;
  }
}
</style>
