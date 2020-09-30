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
  v-else
  @submit="signup"
  class="login-form"
  >
    <q-input
      filled
      class="q-mb-sm"
      type="text"
      v-model="state.firstName"
      label="First Name *"
      bottom-slots
      :error="errors.firstName !== null"
      required
    >
      <template v-slot:error>
        {{ errors.firstName }}
      </template>
    </q-input>

    <q-input
      filled
      class="q-mb-sm"
      type="text"
      v-model="state.lastName"
      label="Last Name *"
      bottom-slots
      :error="errors.lastName !== null"
      required
    >
      <template v-slot:error>
        {{ errors.lastName }}
      </template>
    </q-input>

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

    <q-input
      filled
      class="q-mb-sm"
      type="password"
      v-model="state.passwordconfirm"
      label="Confirm Password *"
      bottom-slots
      :error="errors.passwordconfirm !== null"
      required
    >
      <template v-slot:error>
        {{ errors.passwordconfirm }}
      </template>
    </q-input>
  <div>
    <q-btn unelevated class="full-width q-py-xs" label="Create Account" type="submit" color="accent"/>
  </div>
</q-form>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useSignup } from '../../services/signup'

export default defineComponent({
  name: 'AuthenticationSignupForm',
  setup () {
    const { loading, state, signup, errors } = useSignup()
    return {
      errors,
      loading,
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