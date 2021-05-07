<template>
    <tabbar>
      <tabbaritem path = "/home" activeColor = "#d4237a">
        <img slot = "item-icon" src="../../../assets/img/tabbar/home.svg">
        <img slot = "item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot = "item-text">首页</div>
      </tabbaritem>
      <tabbaritem path = "/category" activeColor = "#d4237a">
        <img slot = "item-icon" src="~assets/img/tabbar/category.svg">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
        <div slot = "item-text">分类</div>
      </tabbaritem>
      <tabbaritem path = "/cart" activeColor = "#d4237a">
        <img slot = "item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
        <div slot = "item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path = "/profile" activeColor = "#d4237a">
        <img slot = "item-icon" src="~assets/img/tabbar/profile.svg">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
        <div slot = "item-text">我的</div>
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

</style>