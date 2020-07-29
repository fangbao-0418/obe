<template>
  <div>
    <h1 class="title">
      class
    </h1>
    <div @click="toClick(2)">
      hello class {{ msg }}
    </div>
    <div>
      my name is {{ name }}
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import 'vue-class-component/hooks'

const GreetingProps = Vue.extend({
  props: {
    name: {
      type: String,
      default: '111'
    }
  }
})

@Component
class Hello extends GreetingProps {
  props: {
    name: String
  }

  data () {
    return {
      msg: 'abc'
    }
  }

  beforeCreate () {

  }

  // @Emit
  mounted () {
    console.log(this.name, 'mounted')
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
