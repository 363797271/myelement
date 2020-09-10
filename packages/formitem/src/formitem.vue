<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'LgFormItem',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  inject: ['form'],
  data() {
    return {
      errMsg: ''
    }
  },
  methods: {
    validate() {
      if (!this.prop) return

      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]

      const descriptor = {
        [this.prop]: rules
      }

      const validator = new AsyncValidator(descriptor)

      return validator.validate(
        {
          [this.prop]: value
        },
        errors => {
          if (errors) {
            this.errMsg = errors[0].message
          } else {
            this.errMsg = ''
          }
        }
      )
    }
  },
  mounted() {
    this.$on('validate', () => {
      this.validate()
    })
  }
}
</script>

<style></style>
