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
  v-else-if="completed">
  <q-card
    class="q-pt-lg q-px-lg bg-grey-2"
    flat bordered
    >
    <p>We sent the verification email to:</p>
    <p><b>{{ email }}</b></p>
    <p>Check your email (and your spam), then click on the verification link to continue</p>
  </q-card>
</div>
<div
  v-else>
  <p class="text-center">Enter your email address below and we will resend a verification message</p>
  <q-form
    @submit="sendVerification"
    class="verify-email-form"
  >
    <q-input
      filled
      class="q-mb-sm"
      type="email"
      v-model="email"
      label="Email *"
      bottom-slots
      required
    />
    <q-card
      v-if="errors.others"
      flat
      class="q-mb-md q-py-sm q-px-md text-red-8 bg-red-1 text-body2"
      >
      <div v-html="errors.others" />
    </q-card>
    <q-btn unelevated rounded class="full-width q-py-xs" label="Send Verification Email" type="submit" color="accent"/>
  </q-form>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api'
import { useSignup } from '../../services/signup'

export default defineComponent({
  name: 'AuthenticationVerifyEmail',
  setup (props, ctx) {
    const email: Ref<string | (string|null)[]> = ref(ctx.root.$route.query.email ? ctx.root.$route.query.email : '')
    const { completed, errors, loading, sendEmailVerification } = useSignup()

    const sendVerification = () => {
      sendEmailVerification(String(email.value))
    }

    return {
      completed,
      email,
      errors,
      loading,
      sendVerification,
    }
  }
})
</script>

<style scoped lang="scss">
</style>