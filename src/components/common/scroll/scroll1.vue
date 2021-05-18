<template>
  <!-- scroll组件本质上是一个可以滚动的列表组件，至于列表的DOM结构，
  只需要满足better-scroll的DOM结构规范即可 -->
  <div class="wrapper" ref="wrapp">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import MouseWheel from '@better-scroll/mouse-wheel'
import Pullup from '@better-scroll/pull-up'

BScroll.use(ObserveDOM).use(MouseWheel).use(Pullup)

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  //对better-scroll做一层Vue的封装，通过props的形式，
  //把一些对better-scroll定制化的控制权交给父组件；
  //通过methods暴露的一些方法对better-scroll的方法做一层代理；
  //通过watch传入的data, 当data发生改变的时候，
  //在适当的时机调用refresh方法重新计算better-scroll确保滚动效果正常，
  //这里之所以要有一个refreshDelay的设置是考虑到
  //如果我们对列表操作用到了transition-group做动画效果，
  //那么DOM的渲染完毕时间就是在动画完成之后
  props: {
    //1：滚动时会派发scroll事件，会截流
    //2：滚动时会派发scroll事件，不会截流
    //3：除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
    probeType: {
      type: Number,
      default: 1
    },
    //点击列表是否派发click事件
    click: {
      type: Boolean,
      default: true
    },
    //是否开启横向滚动
    scrollX: {
      type: Boolean,
      default: false
    },
    //是否派发滚动事件
    listenScroll: {
      type: Boolean,
      default: false
    },
    //列表的数据
    data: {
      type: Array,
      default: null
    },
    //是否派发滚动到底部的事件，用于上拉加载
    pullup: {
      type: Boolean,
      default: false
    },
    //是否派发顶部下拉的事件，用于下拉刷新
    pulldown: {
      type: Boolean,
      default: false
    },
    //是否派发列表滚动开始的事件
    beforeScroll: {
      type: Boolean,
      default: false
    },
    //当数据更新后，刷新scroll的延时
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
    // nextTick是一个异步操作，确保DOM已被渲染
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapp, {
    //     observeDOM: true,
    //     click: true,
    //     mouseWheel: {
    //       speed: 20,
    //       invert: false,
    //       easeTime: 300
    //     }
    //   })
    // })
  },
  methods: {
    _initScroll() {
      if(!this.$refs.wrapp) {
        return
      }
      //better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapp, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
      })
      //是否派发滚动事件
      if(this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      //是否派发滚动到底部事件，用于上拉加载
      if(this.pullup) {
        this.scroll.on('scrollEnd', () => {
          //滚动到底部
          if(this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollEnd')
          }
        })
      }
      //是否派发顶部下拉事件，用于下拉刷新
      if(this.pulldown) {
        this.scroll.on('touchEnd', (pos) => {
          //下拉动作，当我们在滑动列表松开手指时候，
          //better-scroll会对外派发一个TouchEnd事件，
          //我们监听了这个事件，并且判断了pos.y > 50（我们把这个行为定义成一次下拉的动作）
          //如果是下拉的话我们会重新请求数据，并且把新的数据和之前的data做一次contat，
          //也就是更新了列表的数据，那么数据的改变就会映射到DOM的变化。
          //需要注意的一点，这里我们对this.scroll做了判断，
          //如果没有初始化过我们会通过new BScroll初始化，
          //并且绑定一些事件，否则我们会调用this.scroll.refresh方法重新计算，
          //来确保滚动效果的正常
          if(pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }
      //是否派发列表滚动开始的事件
      if(this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    disable() {
      //代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      //代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      //代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      //代理better-scroll的scrollTo方法
      this.scroll && this.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      //代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    //监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style scoped>

</style>