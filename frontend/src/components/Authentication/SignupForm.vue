<template>
<q-form
    @submit="signup"
    class="login-form"
  >
    <q-input
      filled
      class="q-mb-sm"
      type="text"
      v-model="state.name"
      label="Name *"
      required
    />

    <q-input
      filled
      class="q-mb-sm"
      type="email"
      v-model="state.email"
      label="Email *"
      required
    />

    <q-input
      filled
      class="q-mb-sm"
      type="password"
      v-model="state.password"
      label="Password *"
      required
      />

    <q-input
      filled
      class="q-mb-sm"
      type="password"
      v-model="state.passwordconfirm"
      label="Confirm Password *"
      required
      />
  <div>
    <q-btn unelevated class="full-width q-py-xs" label="Create Account" type="submit" color="accent"/>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useAuthenticationSignup } from '../../services/authenticationSignup'

export default defineComponent({
  name: 'AuthenticationSignupForm',
  setup () {
    const { state, signup } = useAuthenticationSignup()

    return {
      signup,
      state
    }
  }
})
</script>

<style scoped lang="scss">
.login-form {
  max-width: 360px;
  width: 100%;
}
</style>