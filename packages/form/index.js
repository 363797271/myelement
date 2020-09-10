import Form from './src/form.vue'

Form.install = Vue => {
  Vue.components(Form.name, Form)
}

export default Form
