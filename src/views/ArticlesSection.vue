<template>
  <div>
    <div class="bg-text">
      <span class="rotate-text">articles</span>
    </div>
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
    </div>
    <div class="footer">
      <hr />
      <span> View all posts </span>
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/ArticleCard";
export default {
  name: "ArticlesSection",
  components: { ArticleCard },
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
  padding: 0 70px;
}
.rotate-text {
  margin-left: 40px;
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
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
.footer {
  display: grid;
  gap: 2vw;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  width: 100vw;
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  hr {
    margin: 0;
  }
  span {
    font-size: 1.8rem;
    &:hover {
      color: #c32865;
      cursor: pointer;
    }
  }
}
</style>
