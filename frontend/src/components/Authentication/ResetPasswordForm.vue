<template>
<div
  class="flex justify-center"
  v-if="loading">
  <q-spinner-tail
    color="accent"
    size="5em"
  />
</div>
<q-form
    @submit="reset"
    v-else
    class="reset-password-form"
  >
    <p class="text-center">Please enter and confirm your new password below to access your account</p>
    <q-input
      filled
      class="q-mb-none"
      type="password"
      v-model="state.password"
      label="Enter your password *"
      :rules="passwordRules()"
      lazy-rules
      required
    />
    <q-input
      filled
      type="password"
      v-model="state.passwordConfirmation"
      label="Confirm your password *"
      :rules="passwordConfirmationRules()"
      lazy-rules
      required
    />
    <div class="text-red-8 q-mb-md">{{ errors.passwordConfirmation }}</div>
  <div>
    <q-btn unelevated class="full-width q-py-xs" label="Reset Password" type="submit" color="accent"/>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive } from '@vue/composition-api'
import { useAuthentication } from '../../services/authentication'
import * as rules from '../../utilities/rules'

export default defineComponent({
  name: 'AuthenticationResetPasswordForm',
  setup (props, ctx) {
    const { errors, loading, resetPassword } = useAuthentication()
    const state: Record<string, string> = reactive({
      code: '',
      password: '',
      passwordConfirmation: '',
    })

    onBeforeMount(() => {
      state.code = String(ctx.root.$route.query.code)
    })

    /**
     * Password Rule
     */
    const passwordRules = () => {
      return [
        rules.required,
        rules.strongPassword,
      ]
    }
    const passwordConfirmationRules = () => {
      return [
        rules.required,
        rules.confirm(state.password, 'password')
      ]
    }

    /**
     * Resets the password
     */
    const reset = () => {
      resetPassword(
        state.code,
        state.password,
        state.passwordConfirmation
      )
    }

    return {
      errors,
      loading,
      reset,
      state,
      passwordRules,
      passwordConfirmationRules,
    }
  }
})
</script>

<style scoped lang="scss">
.reset-password-form {
  max-width: 360px;
  width: 100%;
}
</style>