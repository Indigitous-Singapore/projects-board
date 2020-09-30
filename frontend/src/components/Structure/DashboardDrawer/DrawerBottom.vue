<template>
<q-list
  v-if="authenticated"
  >
  <q-item to="/dashboard" exact>
    <q-item-section>
      Dashboard
    </q-item-section>
  </q-item>
</q-list>
<q-list
  v-else
  >
  <q-item to="/start" exact>
    <q-item-section>
      <q-btn color="accent" bg-color="white" outline rounded label="START A PROJECT" class="accent" />
    </q-item-section>
  </q-item>
  <q-item to="/login" exact>
    <q-item-section>
      <q-btn color="muted" bg-color="white" outline rounded label="LOGIN" class="accent" />
    </q-item-section>
  </q-item>
</q-list>
</template>

<script>
import { defineComponent, ref, watch } from '@vue/composition-api'
import { useUser } from '../../../services/user'

export default defineComponent({
  name: 'DrawerBottom',
  setup (_, ctx) {
    const authenticated = ref(false)
    const { isAuthenticated, user } = useUser()

    authenticated.value = isAuthenticated()

    // Watch effect
    watch(
      () => user.jwt,
      () => {
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
