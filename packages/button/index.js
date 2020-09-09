import Button from './src/button.vue'

Button.install = Vue => {
  Vue.components(Button.name, Button)
}

export default Button
