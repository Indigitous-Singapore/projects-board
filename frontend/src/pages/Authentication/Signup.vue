<template>
  <q-page class="container column justify-center items-center">
    <q-card
      class="signup"
    >
      <q-card-section>
        <h3 class="text-center q-mb-none"><b>Welcome!</b></h3>
        <p class="text-center q-mb-none">Sign up or <router-link to="/login">log in</router-link> to start a project</p>
      </q-card-section>

      <q-card-section class="q-pt-md q-mb-md">
        <AuthenticationSignupForm />
      </q-card-section>

      <q-separator />

      <q-card-actions horizontal class="card-actions justify-center q-py-lg q-px-md">
        By signing up, you agree to our terms of use, privacy policy, and cookie policy. 
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import AuthenticationSignupForm from '../../components/Authentication/SignupForm.vue'

export default defineComponent({
  name: 'PageLogin',
  components: {
    AuthenticationSignupForm,
  }
});
</script>

<style scoped lang="scss">
.signup{
  @media (min-width: 767px) {
    margin-top: 2em;
    margin-bottom: 2em;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;
  }
}
.card-actions {
  max-width: 360px;
}
</style>
