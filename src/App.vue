<template>
  <div>
    <div>test</div>
    <div>
      hello {{ msg }}
    </div>
    <div>
      <button
        @click="goPage"
      >
        点击
      </button>
    </div>
    <hello-class />
    <hello />
    <hello-extend />
  </div>
</template>
<script
  lang="ts"
>
import Vue from 'vue'
import HelloClass from './components/HelloClass.vue'
import Hello from './components/Hello.vue'
import HelloExtend from './components/HelloExtend.vue'
enum StatusEnum {
  红 = 'red',
  蓝 = 'blue'
}
export default Vue.extend({
  components: {
    'hello-class': HelloClass,
    hello: Hello,
    'hello-extend': HelloExtend
  },
  // 类型推断已启用
  data () {
    return {
      msg: 'abc'
    }
  },
  created () {
    console.log('created')
  },
  methods: {
    goPage (id: any): void {
      //
      console.log('go page')
      alert(StatusEnum['红'])
    }
  }
})
</script>

<style>
  .title {
    color: black;
    font-size: 12px;
  }
</style>
