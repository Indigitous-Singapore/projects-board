<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from '@vue/composition-api'
import { isAuthenticated } from './services/authentication'
import { useUser } from './services/user'

export default defineComponent({
  name: 'App',
  setup (props, ctx) {
    const { getProfile } = useUser()

    onBeforeMount(async () => {
      const authenticated = await isAuthenticated()
      if (authenticated) {
        void getProfile()
      }
    })
  }
})
</script>
