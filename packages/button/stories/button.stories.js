// 导入组件的入口文件 index.js
import Button from '../'

export default {
  title: 'Button',
  component: Button
}

export const ShowMessage = () => ({
  components: { Button },
  template: '<Button @click="onClick">Show</Button>',
  methods: {
    onClick() {
      console.log('Hello world!!')
    }
  }
})

export const ShowTime = () => ({
  components: { Button },
  template: '<Button @click="onClick">{{ now }}</Button>',
  data() {
    return {
      now: new Date()
    }
  },
  methods: {
    onClick() {
      this.now = new Date()
    }
  }
})
