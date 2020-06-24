<template>
  <div>
    <h1 class="title">
      class
    </h1>
    <div @click="toClick(2)">
      hello class {{ msg }}
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
class Hello extends Vue {
  data () {
    return {
      msg: 'abc'
    }
  }

  toClick = (path: string) => {
    console.log(this, path, 'click')
  }
}
export default Hello
</script>

<style lang="stylus" scoped>
  .title
    color: red
</style>
