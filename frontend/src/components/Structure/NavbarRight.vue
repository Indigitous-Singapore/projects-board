<template>
<q-toolbar
  v-if="authenticated"
  class="col-auto q-mx-md gt-sm"
  >
</q-toolbar>
<q-toolbar
  v-else
  class="col-auto q-mx-md gt-sm"
  >
  <q-btn color="accent" to="/start" bg-color="white" outline rounded padding="xs lg" label="START A PROJECT" class="accent" />
  <q-btn color="transparent" to="/login" text-color="black" flat stretch padding="lg lg" label="LOG IN" />
</q-toolbar>
</template>

<script>
import { defineComponent, ref, watch } from '@vue/composition-api'
import { useUser } from '../../services/user'

export default defineComponent({
  name: 'NavbarRight',
  setup (_, ctx) {
    const authenticated = ref(false)
    const { isAuthenticated, user } = useUser()

    authenticated.value = isAuthenticated()

    // Watch effect
    watch(
      () => user.token,
      () => {
        console.log('changed')
        authenticated.value = isAuthenticated()
      }
    )

    return {
      authenticated,
      user
    }
  }
})
</script>
