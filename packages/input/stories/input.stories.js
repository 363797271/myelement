// 导入组件的入口文件 index.js
import Input from '../'

export default {
  title: 'Input',
  component: Input
}

export const InputTest = () => ({
  components: { Input },
  template: `
    <div>
      <h3>{{ msg }}</h3>
      <Input v-model="msg" />
    </div>
  `,
  data() {
    return {
      msg: 'Hello world'
    }
  }
})
