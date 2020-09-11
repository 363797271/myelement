<template>
  <div>
    <input :type="type" v-bind="$attrs" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'LgInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {},
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput($event) {
      this.$emit('input', $event.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }

      const parent = findParent(this.$parent)
      if (parent) {
        parent.$emit('validate')
      }
    }
  }
}
</script>

<style></style>
