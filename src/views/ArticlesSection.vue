<template>
  <div class="article-container">
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
.hr {
  width: 10vw !important;
}
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
}
.h2 {
  padding-left: 0;
  justify-self: start;
  &:hover {
    color: #c32865;
    cursor: pointer;
  }
}
@media (max-width: 500px) {
  .article-container {
    height: 100vh;
  }
  .content {
    padding: 0 2rem !important;
  }
  .article-grid {
    grid-template-columns: 1fr !important;
  }
  h1 {
    padding: 10rem 0 5rem !important;
    font-size: 3rem !important;
  }
  .footer {
    margin-bottom: 6rem;
  }
  .hr {
    width: 15vw !important;
  }
  .h2 {
    padding-left: 10vw;
    font-size: 1.3rem;
    font-family: Montserrat, sans-serif;
    letter-spacing: 0.1em;
    font-weight: 400;
  }
}
</style>
