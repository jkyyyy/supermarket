<template>
  <div id = "home">
    <navbar>
      <template v-shot:left>
        左边
      </template>
      <template v-slot:center>购物街</template>
      <template v-slot:right>
        <div>
          右边     
        </div>
      </template>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'

export default {
  name: "home",
  components: {
    navbar
  }
}
</script>

<style>

</style>