<template>
  <q-page class="container column justify-center items-center q-pa-xl">
    <h3>Please wait a moment...</h3>
    <q-spinner-tail size="10em" color="accent"/>
    <h5 class="q-mt-lg">We are logging you out</h5>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import { useUser } from '../../services/user'

export default defineComponent({
  name: 'PageLogout',
  setup (props, ctx) {
    onMounted(async () => {
      const { logout } = useUser()

      setTimeout(async () => {
        await logout()
        ctx.root.$router.push('/')
      }, 1500)
      
    })

    return {}
  }
});
</script>