<template>
  <div>
    <h1>vue extend</h1>
    <div @click="toClick">
      hello {{ msg }}
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      msg: 'extend'
    }
  },
  methods: {
    toClick () {
      console.log('click')
    }
  }
})
</script>

<style>

</style>
