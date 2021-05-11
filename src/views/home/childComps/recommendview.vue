<template>
  <div class="recommend">
    <div v-for="(item, index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendview",
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
display: flex;
text-align: center;
font-size: 100%;
padding: 10px 0 20px 0;
border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
  padding: 0 1px 0 1px;
}

.recommend-item img {
  max-width: 100%;
  margin-bottom: 10px;
}
</style>