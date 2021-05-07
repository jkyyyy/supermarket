<template>
  <div class = "tab-bar-item" @click="itemClick">
    <!-- 用div把slot包装起来，方便slot被替换时，某些属性不被改变 -->
    <div v-if = "!isActive"><slot name = "item-icon"></slot></div>
    <div v-else><slot name = "item-icon-active"></slot></div>
    <div :style = "activeStyle">
      <slot name = "item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      //看当前路径有没有path，找到则不等于-1
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String, 
    activeColor: {
      type: String,
      default: 'blue'
    }
  },
  // 方便在控制台调试
  created() {
    window.tabbaritem = this
  },
  methods: {
    itemClick() {
      console.log(this.path);
      this.$router.replace(this.path).catch(err => '')
    }
  },
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

/* .active {
  color: #d4237a
} */
</style>