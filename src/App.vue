<template>
  <div class="app">
    <my-header />
    <my-goods />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '#/MyHeader'
import MyGoods from '#/MyGoods'
import MyFooter from '#/MyFooter'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  }
}
</script>

<style scoped>
.app {
  padding: 50px 0;
  max-height: 100vh;
  box-sizing: border-box;
  overflow: auto;
}
</style>
