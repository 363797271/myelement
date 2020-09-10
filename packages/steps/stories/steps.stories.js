// 导入组件的入口文件 index.js
import Steps from '../'

export default {
  title: 'Steps',
  component: Steps
}

export const StepsTest = () => ({
  components: { Steps },
  template: `
    <div>
      <Steps :count="count" :active="active"></Steps>
      <button @click="next">下一步</button>
    </div>
  `,
  data() {
    return {
      count: 4,
      active: 0
    }
  },
  methods: {
    next() {
      this.active < this.count && this.active++
    }
  }
})
