<template>
  <div class="contact-container-parent">
    <div class="contact-container">
      <BgImage :bg-img="bgImg" />
      <BgText text="contact" />
      <div class="content">
        <ContactCard />
        <ContactForm />
      </div>
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
.contact-container {
  display: grid;
  align-content: center;
}
.content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 70px;
  padding: 0 70px !important;
}
.rotate-text {
  margin-left: 40px;
}
@media (max-width: 500px) {
  .contact-container-parent {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .content {
    grid-template-columns: 1fr !important;
    padding: 0 3rem 6rem !important;
  }
}
</style>
