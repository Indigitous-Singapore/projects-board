<template>
  <q-page class="container column justify-center items-center">
    <q-card class="forgot-password">
      <q-card-section>
        <h3 class="text-center q-mb-none"><b>Reset Your Password</b></h3>
      </q-card-section>

      <q-card-section class="q-pt-md q-mb-md">
        <AuthenticationResetPasswordForm />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AuthenticationResetPasswordForm from '../../components/Authentication/ResetPasswordForm.vue'

export default defineComponent({
  name: 'PageForgotPassword',
  components: {
    AuthenticationResetPasswordForm,
  }
});
</script>

<style scoped lang="scss">
.forgot-password{
  @media (min-width: 767px) {
    margin-top: 2em;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;
  }
}
</style>
