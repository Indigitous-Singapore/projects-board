<template>
  <q-page class="container column justify-center items-center">
    <q-card class="q-px-xl q-pt-lg q-my-xl">
      <q-card-section>
        <h3 class="text-center q-mb-none"><b>Welcome Back!</b></h3>
        <h6 class="text-center q-mb-none">Log in to continue</h6>
      </q-card-section>

      <q-card-section class="q-pt-lg q-mb-md">
        <AuthenticationLoginForm />
      </q-card-section>

      <q-separator />

      <q-card-actions horizontal class="justify-center q-py-lg">
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
</style>
