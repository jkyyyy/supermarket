<template>
  <div class="goods-item">
    <!-- <img :src="goodsitem.show.img" alt=""> -->
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <!-- <span class="collect">{{goodsitem.cfav}}</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Goodslistitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  /* position: relative;

  width: 48%; */
}
.goods-info {
  font-size: 12px;
  /* position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center; */
}
</style>