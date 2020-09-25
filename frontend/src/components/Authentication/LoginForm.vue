<template>
<q-form
    @submit="login"
    class="q-gutter-md login-form"
  >
    <q-input
      filled
      type="email"
      v-model="state.email"
      label="Email *"
      required
    />

    <q-input
      filled
      type="password"
      v-model="state.password"
      label="Password *"
      required
      />
  <div>
    <q-btn unelevated class="full-width q-py-xs" label="Log In" type="submit" color="accent"/>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useAuthenticationLogin } from '../../services/authenticationLogin'

export default defineComponent({
  name: 'AuthenticationLoginForm',
  setup () {
    const { state, login } = useAuthenticationLogin()

    return {
      login,
      state
    }
  }
})
</script>

<style scoped lang="scss">
.login-form {
  min-width: 360px;
}
</style>