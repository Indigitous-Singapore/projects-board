<template>
  <q-page class="container column justify-center items-center">
    <q-card class="verify-email">
      <q-card-section>
        <h3 class="text-center q-mb-none"><b>Verify Your Email</b></h3>
      </q-card-section>

      <q-card-section class="q-pt-md q-mb-md">
        <AuthenticationVerifyEmail />
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
import AuthenticationVerifyEmail from '../../components/Authentication/VerifyEmail.vue'

export default defineComponent({
  name: 'PageVerifyEmail',
  components: {
    AuthenticationVerifyEmail,
  }
});
</script>

<style scoped lang="scss">
.verify-email{
  max-width: 400px;

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
