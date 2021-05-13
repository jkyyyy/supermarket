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
    <goodslist :goods="goods['pop'].list"/>
    <!-- <h2>{{goodstest}}</h2> -->
    <li>djd</li>
    <li>ddf</li>
    <li>eee</li>
    <li>rrr</li>
    <li>rtrtg</li>
    <li>sdaf</li>
    <li>asdf</li>
    <li>vav</li>
    <li>sadfwae</li>
    <li>adsfawe</li><li>djd</li>
    <li>ddf</li>
    <li>eee</li>
    <li>rrr</li>
    <li>rtrtg</li>
    <li>sdaf</li>
    <li>asdf</li>
    <li>vav</li>
    <li>sadfwae</li>
    <li>adsfawe</li><li>djd</li>
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
import Goodslist from 'components/content/goods/goodslist.vue'

import {getHomeMultidata, gethomegoods, getgoods} from 'network/home'

import Recommendview from './childComps/recommendview.vue'
import Featureview from './childComps/featureview.vue'
import Homeswiper from './childComps/homeswiper.vue'


export default {
  name: "home",
  components: {
    Navbar,
    Tabcontrol,
    Goodslist,
    
    Recommendview,
    Featureview,
    Homeswiper,

  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      // goodstest: {
      //   'pop': {page: 0, list: []},
      //   'new': {page: 0, list: []},
      //   'sell': {page: 0, list: []},
      // }
    }
  },
  created() {
    //请求多个数据
    // this.getHomeMultidata1();
    //请求商品数据
    this.gethomegoods1('pop');
    // this.gethomegoods('new')
    // this.gethomegoods('sell')
    // this.getgoods1()
  },
  methods: {
    //执行完后，回收了引用（指针），对象没有被回收，除非res = null，
    //因为只要有一个引用指向对象，对象就不会被回收
    getHomeMultidata1() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    gethomegoods1(type) {
      const page = this.goods[type].page +1;
      gethomegoods(type,page).then(res => {
        // console.log(res);
        //es6拓展语法
        // console.log(res);
        this.goods[type].list.push(...res.goods[type].list);
        // this.goods[type].list = res.goods[type].list;
        this.goods[type].page += 1;
      })
    },
    // getgoods1() {
    //   getgoods().then(res => {
    //     this.goodstest = res.goodstest
    //   })
    // }
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

.tab-control {
  position: sticky;
  top: 44px;
}
</style>