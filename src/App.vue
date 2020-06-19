<template>
  <div>
    <div>hello {{msg}}</div>
    <div>
      <button @click="goPage(2)">
        点击
      </button>
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  // export default class App extends Vue {
  //   // data = {
  //   //   msg: 'abc'
  //   // }
  // }
  export default Vue.extend({
    // 类型推断已启用
    data () {
      return {
        msg: 'abc'
      }
    },
    methods: {
      goPage (id: any): void {
        //
      }
    }
  })
</script>