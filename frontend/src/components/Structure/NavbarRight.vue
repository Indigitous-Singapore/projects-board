<template>
<q-toolbar
  v-if="user && user.email !== null"
  class="col-auto q-mx-md gt-sm"
  >
  <q-btn-dropdown stretch flat no-caps>
    <template v-slot:label>
      <div class="row items-center no-wrap">
        <q-avatar size="32px">
          <img :src="user.displayPictureUrl">
        </q-avatar>
        <div class="text-center q-ml-sm">
          {{ user.firstName }} {{ user.lastName }}
        </div>
      </div>
    </template>

    <q-list>
      <q-item to="/dashboard" clickable v-close-popup>
        <q-item-label class="flex items-center">Dashboard</q-item-label>
      </q-item>
      
      <q-separator/>
      
      <q-item to="/logout" clickable v-close-popup>
        <q-item-label class="flex items-center">Logout</q-item-label>
      </q-item>
    </q-list>
  </q-btn-dropdown>
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
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api'
import { useUser } from '../../services/user'

export default defineComponent({
  name: 'NavbarRight',
  setup () {
    const { user } = useUser()

    return {
      user
    }
  }
})
</script>
