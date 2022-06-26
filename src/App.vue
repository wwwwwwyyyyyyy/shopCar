<template>
  <div class="app">
    <my-header :styles="styles" :title="title" />
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
  },
  data() {
    return {
      styles: {
        background: 'aqua',
        color: 'red'
      },
      title: '购物车案例'
    }
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
