<template>
  <div class="container">
    <BgText text="articles" />
    <div class="content">
      <div>
        <h1><span>Recent</span> news</h1>
      </div>
      <div class="article-grid">
        <ArticleCard
          v-for="(item, index) of articleList"
          :article="item"
          :key="index"
        />
      </div>
      <div class="footer">
        <hr class="hr" />
        <span class="h2"> View all posts </span>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";
import BgText from "@/components/BgText";
export default {
  name: "ArticlesSection",
  components: { BgText, ArticleCard },
  data() {
    return {
      isHover: false,
      articleList: [
        {
          title: "SCENT IN THE VOYAGES",
          date: "December 27, 2019",
          topic: "Stories",
          content:
            "Divided place firmament replenish form place us that morning, let sea have their kind which called she'd every subdue their called over forth. First place for ...",
        },
        {
          title: "THE STONE OF THE FLAMES",
          date: "December 27, 2019",
          topic: "Inspiration",
          content:
            "Divided place firmament replenish form place us that morning, let sea have their kind which called she'd every subdue their called over forth. First place for ...",
        },
        {
          title: "SECRETS OF THE SERPENTS",
          date: "December 27, 2019",
          topic: "Giveaway",
          content:
            "Divided place firmament replenish form place us that morning, let sea have their kind which called she'd every subdue their called over forth. First place for ...",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 8rem !important;
  margin: 0;
}
h1 {
  padding: 40px 0;
  font-size: 4.5rem;
  span {
    color: #c32865;
  }
}
.article-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
}
.footer {
  display: grid;
  gap: 2vw;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  width: 100vw;
  margin-top: 2rem;
  //position: fixed;
  //z-index: 10;
  //bottom: 70px;
  //left: 0;
}
.h2 {
  padding-left: 0;
  justify-self: start;
  &:hover {
    color: #c32865;
    cursor: pointer;
  }
}
</style>
