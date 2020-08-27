<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered class="bg-white text-black">
      <div class="row">
        <q-toolbar class="col-grow">
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleDrawer()"
            class="lt-sm mobile-only"
          />
          <img src="../assets/placeholder.com-logo4.png" style="width:150px" class="q-mr-lg" />
          <q-btn color="transparent" text-color="black" flat stretch padding="lg lg" label="ABOUT" to="/about" />
          <q-btn color="transparent" text-color="black" flat stretch padding="lg lg" label="EXPLORE" to="/explore" />
          <q-input 
            v-model="search"
            bg-color="transparent"
            color="black"
            clearable
            borderless
            hide-bottom-space
            class="col-grow"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>
        <q-separator vertical inset />
        <q-toolbar class="col-auto q-mx-md">
          <q-btn color="accent" bg-color="white" outline rounded padding="xs lg" label="START A PROJECT" class="accent" />
          <q-btn color="transparent" text-color="black" flat stretch padding="lg lg" label="LOG IN" />
        </q-toolbar>
      </div>
    </q-header>

    <ComponentDrawer
      :leftDrawerOpen="leftDrawerOpen"
      />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-9 text-white">
      <q-toolbar>
        <div class="col-1"></div>
        <span class="q-mx-md">© Copyright 2020</span>
        <q-separator dark vertical inset spaced="lg" class="q-my-md" />
        <q-btn color="transparent" text-color="grey-4" dense flat no-caps padding="sm" label="Terms and Conditions" class="q-mx-md" />
        <q-separator dark vertical inset spaced="lg" class="q-my-md" />
         <q-btn color="transparent" text-color="grey-4" dense flat no-caps padding="sm" label="Privacy" class="q-mx-md" />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import ComponentDrawer from 'components/Structure/Drawer.vue'
import { defineComponent, ref } from '@vue/composition-api'
 
export default defineComponent({
  name: 'MainLayout',
  components: {
    ComponentDrawer,
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const toggleDrawer = () => {
      leftDrawerOpen.value  = !leftDrawerOpen.value
    }

    return {
      toggleDrawer,
      leftDrawerOpen,
      search
    }
  }
})
</script>
<style lang="scss">
.accent {
  &:hover {
    background-color: $accent !important;
    color: white !important;
  }
}
</style>