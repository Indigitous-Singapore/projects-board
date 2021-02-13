<template>
  <q-page class="container column justify-center items-center">
    <q-card class="forgot-password">
      <q-card-section>
        <h3 class="text-center q-mb-none"><b>Forgot Your Password?</b></h3>
      </q-card-section>

      <q-card-section class="q-pt-md q-mb-md">
        <AuthenticationForgotPasswordForm />
      </q-card-section>

      <q-separator />

      <q-card-actions horizontal class="card-actions justify-center q-py-lg q-px-md">
        Don't have an account?&nbsp;<router-link to="/start">Sign up here</router-link>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AuthenticationForgotPasswordForm from '../../components/Authentication/ForgotPasswordForm.vue'

export default defineComponent({
  name: 'PageForgotPassword',
  components: {
    AuthenticationForgotPasswordForm,
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
