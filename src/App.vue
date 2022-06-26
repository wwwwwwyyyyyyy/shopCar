<template>
  <div class="app">
    <my-header background="aqua" color="red" title="购物车案例" />
    <my-goods v-for="item in list" :key="item.goods_id" :goodsObj="item" />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '#/MyHeader'
import MyGoods from '#/MyGoods'
import MyFooter from '#/MyFooter'
import axios from 'axios'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const res = await axios({ url: '/api/cart' })
      console.log(res)
      this.list = res.data.list
      console.log(this.list)
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
