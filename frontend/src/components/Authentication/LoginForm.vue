<template>
<q-form
    @submit="login"
    class="login-form"
  >
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
  <div>
    <q-btn unelevated class="full-width q-py-xs" label="Log In" type="submit" color="accent"/>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useAuthentication } from '../../services/authentication'

export default defineComponent({
  name: 'AuthenticationLoginForm',
  setup () {
    const { state, login } = useAuthentication()

    return {
      login,
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