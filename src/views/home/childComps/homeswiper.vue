<template>
<div>
  <swiper>
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper></div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "homeswiper",
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Swiper, SwiperItem
  }
}
</script>

<style>

</style>