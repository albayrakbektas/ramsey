<template>
  <div>
    <BgImage :bg-img="bgImg" />
    <BgText text="contact" />
    <div class="content">
      <ContactCard />
      <ContactForm />
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import BgText from "@/components/BgText";
import BgImage from "@/components/BgImage";
export default {
  name: "ContactSection",
  components: { BgImage, BgText, ContactForm, ContactCard },
  data() {
    return {
      bgImg: {
        src: require("../assets/section-bg-images/contact.jpeg"),
        alt: "contact background image",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 70px;
}
.rotate-text {
  margin-left: 40px;
}
</style>
