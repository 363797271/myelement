import Formitem from './src/formitem.vue'

Formitem.install = Vue => {
  Vue.components(Formitem.name, Formitem)
}

export default Formitem
