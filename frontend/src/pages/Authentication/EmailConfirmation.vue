<template>
  <q-page class="container column justify-center items-center">
    <q-card class="login">
      <q-card-section>
        <h3 class="text-center q-mb-none"><b>Login To Continue</b></h3>
        <p class="text-center q-mb-none">Thanks For Confirming Your Email</p>
      </q-card-section>

      <q-card-section class="q-pt-md q-mb-md">
        <AuthenticationLoginForm />
        <div class="q-pt-md text-body2"><router-link to="/forgot-password">Forgot your password?</router-link></div>
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
import AuthenticationLoginForm from '../../components/Authentication/LoginForm.vue'

export default defineComponent({
  name: 'PageLogin',
  components: {
    AuthenticationLoginForm,
  }
});
</script>

<style scoped lang="scss">
.login{
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
