<template>
  <div class="tab-control">
    <div v-for="(item, index) in title" :key="index" 
         class="tab-control-item" 
         :class="{active: index == currentIndex}" 
         @click.native="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabcontrol",
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex : 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>