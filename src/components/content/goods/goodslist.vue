<template>
  <div class="goods">
    <goodslistitem v-for="(item, index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import Goodslistitem from './goodslistitem.vue'

export default {
  name: "Goodslist",
  components: {
    Goodslistitem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    display: flex;
    /* flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px; */
  }
</style>