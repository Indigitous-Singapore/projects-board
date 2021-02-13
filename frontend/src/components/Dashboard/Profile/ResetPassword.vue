<template>
<q-card class="forgot-password q-mx-xl q-pa-md bg-grey-2" flat bordered>
  <q-card-section>
    <h4 class="q-mb-none"><b>Reset Your Password</b></h4>
  </q-card-section>

  <q-card-section class="q-pt-md q-mb-md">
    <AuthenticationForgotPasswordForm
      maxWidth="1000"
      />
  </q-card-section>
</q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AuthenticationForgotPasswordForm from '../../Authentication/ForgotPasswordForm.vue'

export default defineComponent({
  name: 'ComponentDashboardProfileResetPassword',
  components: {
    AuthenticationForgotPasswordForm,
  }
})
</script>
<style lang="scss" scoped>
</style>
