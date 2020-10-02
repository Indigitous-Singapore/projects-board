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
    @submit="login"
    v-else
    class="login-form"
  >
    <q-input
      filled
      class="q-mb-sm"
      type="email"
      v-model="state.email"
      label="Email *"
      bottom-slots
      :error="errors.email !== null"
      required
    >
      <template v-slot:error>
        {{ errors.email }}
      </template>
    </q-input>

    <q-input
      filled
      class="q-mb-sm"
      type="password"
      v-model="state.password"
      label="Password *"
      bottom-slots
      :error="errors.password !== null"
      required
    >
      <template v-slot:error>
        {{ errors.password }}
      </template>
    </q-input>
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
    const { errors, loading, state, login } = useAuthentication()

    return {
      errors,
      loading,
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