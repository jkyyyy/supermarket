<template>
  <div id="home" class="wrapper">
    <navbar class="home-nav">
      <template v-shot:left>左边</template>
      <template v-slot:center>购物街</template>
      <template v-slot:right>右you边</template>
    </navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <!-- :data = "data"
            :pulldown = "pulldown"
            @pulldown = "loadData"> -->
    <!-- <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore"> -->
      <div class="content">
        <homeswiper :banner="banner"/>
        <recommendview :recommend="recommend"/>
        <featureview/>
        <tabcontrol class="tab-control"
                  :title="['流行', '新款', '精选']"
                  @tabClick="tabclick"/>
        <goodslist :goods="goods[currenttype].list"/>
      </div>
    </scroll>
    <backtop @click.native="backClick" v-show="isShowBackTop"></backtop>
    <!-- <h2>{{goodstest}}</h2> -->
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/navbar'
import Tabcontrol from 'components/content/tabcontrol/tabcontrol'
import Goodslist from 'components/content/goods/goodslist.vue'
import Scroll from 'components/common/scroll/scroll.vue'
import Backtop from 'components/content/backtop/backtop.vue'
// import Scroll from 'components/common/scroll/scroll1.vue'

// import BScroll from '@better-scroll/core'

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
    Scroll,
    Backtop,
    // Scroll

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
      currenttype: 'pop',

      isShowBackTop: false
      // goodstest: {
      //   'pop': {page: 0, list: []},
      //   'new': {page: 0, list: []},
      //   'sell': {page: 0, list: []},
      // }

      // data: [],
      // pulldown: true
    }
  },
  created() {
    //请求多个数据
    this.getHomeMultidata1()
    //请求商品数据
    this.gethomegoods1('pop')
    this.gethomegoods1('new')
    this.gethomegoods1('sell')
    // this.getgoods1()

    // this.loadData()
  },
  methods: {
    //事件监听相关的方法
    tabclick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currenttype = 'pop'
          break
        case 1:
          this.currenttype = 'new'
          break
        case 2:
          this.currenttype = 'sell'
      }
    },

    // 网络请求相关的方法
    //执行完后，回收了引用（指针），对象没有被回收，除非res = null，
    //因为只要有一个引用指向对象，对象就不会被回收
    getHomeMultidata1() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banner = res.banner.list;
        this.recommend = res.recommend.list;
      })
    },
    gethomegoods1(type) {
      const page = this.goods[type].page +1;
      gethomegoods(type, page).then(res => {
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
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShowBackTop = (-position.y) > 1000
    },
    // loadMore() {
    //   this.gethomegoods1(this.currenttype)
    // }
    // loadData() {
    //   requestData().then((res) => {
    //     this.data = res.data.concat(this.data)
    //   })
    // }
  },
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
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
  z-index: 9;
}

.content {
  height: calc(100% - 93px);
  /* position: absolute;
  top: 44px;
  bottom:49px;
  left: 0;
  right: 0; */
  overflow: hidden;
  margin-top: 44px;
}
</style>