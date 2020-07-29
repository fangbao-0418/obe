<template>
  <div>
    <h1>default</h1>
    <div>hello {{ msg }}</div>
    <img
      width="300"
      height="300px"
      :src="imgUrl"
    >
    <img
      :src="require('@/assets/nezha.jpg')"
      width="200"
      height="200px"
    >
    <span class="img" />
  </div>
</template>

<script>
const o = {
  data () {
    return {
      imgUrl: require('@/assets/nezha.jpg'),
      msg: 'default'
    }
  }
}
export default o
</script>

<style lang="stylus" scoped>
  .img
    background: url('~@/assets/nezha.jpg') 0 0 / 100% 100% no-repeat
    display: inline-block
    width: 100px
    height: 100px
</style>
