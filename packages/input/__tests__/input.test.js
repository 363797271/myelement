// 导入组件
import input from '../src/input.vue'
// 导入 Vue Test Utils 中的 API 挂在组件
import { mount } from '@vue/test-utils'

// 通过 describe 创建一个代码块
// 把 input 的相关测试都放到这个代码块中
describe('my-input', () => {

  // 测试1：测试 input 组件是否生成的是预期的文本框
  test('input-text', () => {
    // 在内存中挂在组件，并获取返回的包裹器
    const wrapper = mount(input)
    // 断言：包裹器获取的html字符串中包含指定内容
    expect(wrapper.html()).toContain('input type="text"')
  })

  // 测试2：测试密码文本框
  test('input-password', () => {
    // propsData 设置组件的props属性
    const wrapper = mount(input, {
      propsData: {
        type: 'password'
      }
    })

    expect(wrapper.html()).toContain('input type="password"')
  })

  // 测试3：测试组件状态（value值）
  test('input-value', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })

    expect(wrapper.props('value')).toBe('admin')
  })

  // 测试4：快照对比
  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })

    // 首次执行该测试，会在当前test.js所在目录创建 __snapshots__ 目录
    // 目录中存放的就是快照文件 input.test.js.snap
    // 当前测试用例存储的快照内容是组件实例的 DOM

    // 之后再执行该测试，就会用 expect 传入的值，对比快照文件中的内容
    // 如果一样，测试成功，如果不一样，测试失败
    // 可以修改 propsData 的参数查看对比结果
    // 重新生成快照： `yarn jest -u`
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
