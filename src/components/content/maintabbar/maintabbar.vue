<template>
  <tabbar>
    <tabbaritem path = "/home">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/home.svg">
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img  src="~assets/img/tabbar/home_active.svg">
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          首页
        </div>
      </template>
    </tabbaritem>
    <tabbaritem path = "/category">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/category.svg">
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img  src="~assets/img/tabbar/category_active.svg">
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          分类
        </div>
      </template>
    </tabbaritem>
    <tabbaritem path = "/shopcart">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/shopcart.svg">
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img  src="~assets/img/tabbar/shopcart_active.svg">
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          购物车
        </div>
      </template>
    </tabbaritem>
    <tabbaritem path = "/profile">
    <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/profile.svg">
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img  src="~assets/img/tabbar/profile_active.svg">
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          我的
        </div>
      </template>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar.vue'
import tabbaritem from 'components/common/tabbar/tabbaritem.vue'

export default {
  name: "maintabbar",
  components: {
  tabbar,
  tabbaritem
  }
}
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>