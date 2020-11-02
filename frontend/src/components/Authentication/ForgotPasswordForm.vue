<template>
<div
  class="flex justify-center"
  v-if="loading">
  <q-spinner-tail
    color="accent"
    size="5em"
  />
</div>
<div
  class="flex justify-center"
  v-else-if="resetEmailSent"
  >
  <div
    style="max-width: 340px"
    class="text-center"
    >
    <p class="text-grey-9">An email has been sent to you with instructions on how to reset your password.</p>
  </div>
</div>
<q-form
    @submit="forgot"
    v-else
    :style="`max-width: ${maxWidth}px`"
    class="forgot-password-form"
  >
    <p class="text-grey-9">Let us know your email and we will send you instructions how to reset it.</p>
    <q-input
      filled
      class="q-mb-sm"
      type="email"
      v-model="email"
      label="Email *"
      bottom-slots
      :error="errors.email !== null"
      required
    >
      <template v-slot:error>
        {{ errors.email }}
      </template>
    </q-input>
  <div>
    <q-btn unelevated rounded class="full-width q-py-xs" label="Reset Password" type="submit" color="accent"/>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'
import { useAuthentication } from '../../services/authentication'

export default defineComponent({
  name: 'AuthenticationForgotPasswordForm',
  props: {
    maxWidth: {
      type: Number,
      default: 360
    }
  },
  setup () {
    const { errors, loading, resetEmailSent, forgotPassword } = useAuthentication()
    const email: Ref<string> = ref('')

    /**
     * forgot the password
     */
    const forgot = () => {
      forgotPassword(
        email.value
      )
    }

    return {
      email,
      errors,
      loading,
      forgot,
      resetEmailSent
    }
  }
})
</script>

<style scoped lang="scss">
.forgot-password-form {
  width: 100%;
}
</style>