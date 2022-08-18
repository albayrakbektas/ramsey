<template>
  <div>
    <div class="bg-text">
      <span class="rotate-text">contact</span>
    </div>
    <div class="content">
      <ContactCard />
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
export default {
  name: "ContactSection",
  components: { ContactForm, ContactCard },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 70px;
  margin-top: 70px;
}
.rotate-text {
  margin-left: 40px;
}
</style>
