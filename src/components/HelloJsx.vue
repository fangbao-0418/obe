<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import 'vue-class-component/hooks'

@Component
class Hello extends Vue {
  props: {
    level: String
  }

  updated () {
    console.log('xxx')
  }

  render (h: any) {
    console.log(this.$slots.default, 'this.$slots.default')
    return h(
      'a',
      {
        attrs: {
          // href: 'http://www.baidu.com'
        },
        style: {
          color: 'red'
        }
      },
      [
        h('span', { style: { color: 'green' }, on: { click: () => { alert('click') } } }, 'abc'),
        h('br'),
        h('b', 'abc'),
        h('div', this.$slots.default)
      ]
    )
  }
}
export default Hello
// export default Vue.component('AnchoredHeading', {
//   functional: true,
//   props: {
//     level: {
//       type: Number,
//       required: true
//     }
//   },
//   render: function (h, context) {
//     const { props } = context
//     console.log(this, context, 'xxxxxxxx')
//     // return createElement(
//     //   'h' + this.level, // 标签名称
//     //   this.$slots.default // 子节点数组
//     // )
//     return (
//       <div>
//         {props.level}
//         <div>
//           this is jsx
//         </div>
//       </div>
//     )
//   }
// })
// export default ({ props }) => <p>hello {props.message}</p>

</script>
