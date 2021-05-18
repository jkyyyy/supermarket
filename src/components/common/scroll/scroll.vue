<template>
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

  props: {
    probeType: {
      type: Number,
      default: 0
    },
    // pullUpLoad: {
    //   type: Boolean,
    //   default: true
    // }
  },

  mounted() {
    // nextTick是一个异步操作，确保DOM已被渲染
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapp, {
    //     observeDOM: true,
    //     click: true,
    //     tap: 'tap',
    //     mouseWheel: {
    //       speed: 20,
    //       invert: false,
    //       easeTime: 300
    //     },
    //     probeType: this.probeType,
    //     // pullUpLoad: this.pullUpLoad
    //   })
    // });
    this.scroll = new BScroll(this.$refs.wrapp, {
      observeDOM: true,
      click: true,
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      },
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
      // console.log(position)
    })
    // //监听上拉事件
    // this.scroll.on('pullingUp', () => {
    //   this.$emit('pullingUp')
    // })
  },
  methods: {
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    // finishPullUp() {
    //   this.scroll.finishPullUp()
    // }
  }
}
</script>

<style scoped>

</style>