<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleDrawer(!leftDrawerOpen)"
        />

        <q-toolbar-title>
          Projects Board
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <ComponentDrawer
      :leftDrawerOpen="leftDrawerOpen"
      />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ComponentDrawer from 'components/Structure/Drawer.vue'
import { ref } from '@vue/composition-api'
 
export default {
  name: 'MainLayout',
  components: {
    ComponentDrawer,
  },
  setup(props, ctx) {
    const leftDrawerOpen = ref(true)
    const toggleDrawer = (open = true) => {
      leftDrawerOpen.value  = open
    }

    return {
      toggleDrawer,
      leftDrawerOpen,
    }
  }
}
</script>
