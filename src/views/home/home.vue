<template>
  <div id = "home">
    <navbar class="home-nav">
      <template v-shot:left>左边</template>
      <template v-slot:center>购物街</template>
      <template v-slot:right>右you边</template>
    </navbar>
    <homeswiper :banner="banner"></homeswiper>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import Homeswiper from './childComps/homeswiper.vue'

import {getHomeMultidate} from 'network/home'

export default {
  name: "home",
  components: {
    navbar,
    Homeswiper
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    getHomeMultidate().then(res => {
      // console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    })
    //执行完后，回收了引用（指针），对象没有被回收，除非res = null，
    //因为只要有一个引用指向对象，对象就不会被回收
  },

}
</script>

<style>
.home-nav {
  /* 这个变量在base.css中定义了 */
  background-color: var(--color-tint);
  color: #fff;
}
</style>