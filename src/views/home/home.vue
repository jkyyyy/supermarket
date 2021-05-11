<template>
  <div id="home">
    <navbar class="home-nav">
      <template v-shot:left>左边</template>
      <template v-slot:center>购物街</template>
      <template v-slot:right>右you边</template>
    </navbar>
    <homeswiper :banner="banner"/>
    <recommendview :recommend="recommend"/>
    <featureview/>
    <tabcontrol :title="['流行', '新款', '精选']"/>
    <li>djd</li>
    <li>ddf</li>
    <li>eee</li>
    <li>rrr</li>
    <li>rtrtg</li>
    <li>sdaf</li>
    <li>asdf</li>
    <li>vav</li>
    <li>sadfwae</li>
    <li>adsfawe</li>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import Tabcontrol from 'components/content/tabcontrol/tabcontrol'

import {getHomeMultidate} from 'network/home'

import Recommendview from './childComps/recommendview.vue'
import Featureview from './childComps/featureview.vue'
import Homeswiper from './childComps/homeswiper.vue'

export default {
  name: "home",
  components: {
    Navbar,
    Tabcontrol,
    
    Recommendview,
    Featureview,
    Homeswiper,
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
#home {
  padding-bottom: 400px;
}

.home-nav {
  /* 这个变量在base.css中定义了 */
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
</style>