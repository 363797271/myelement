// 导入组件的入口文件 index.js
import Form from '../'
import FormItem from '../../formitem'
import Input from '../../input'
import Button from '../../button'

export default {
  title: 'Form',
  component: Form
}

export const FormTest = () => ({
  components: {
    Form,
    FormItem,
    Input,
    Button
  },
  template: `
    <Form :model="user" :rules="rules" ref="form" class="form">
      <Form-Item label="用户名" prop="username">
        <Input v-model="user.username" placeholder="请输入用户名"></Input>
      </Form-Item>
      <Form-Item label="密码" prop="password">
        <Input
          type="password"
          v-model="user.password"
          autocomplete="off"
        ></Input>
      </Form-Item>
      <Form-Item>
        <button type="primary" @click="login()">登 录</button>
      </Form-Item>
    </Form>
  `,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码最少6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
})
