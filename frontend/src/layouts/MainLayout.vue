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
            class="lt-md"
          />
          <router-link
            to="/"
            >
            <img src="../assets/logo.png" style="width:150px" class="q-mr-lg q-ml-md" />
          </router-link>
          <div class="gt-sm row">
            <q-btn color="transparent" text-color="black" flat stretch padding="lg lg" label="ABOUT" to="/about" />
            <q-btn color="transparent" text-color="black" flat stretch padding="lg lg" label="EXPLORE" to="/explore" />
            <q-input 
              v-model="search"
              clearable
              standout
              bg-color="white"
              hide-bottom-space
              :input-style="{ backgroundColor: 'white', color: 'black' }"
              class="col-auto"
            >
              <template v-slot:prepend>
                <q-icon name="search" color="grey-9" />
              </template>
            </q-input>
          </div>
        </q-toolbar>
        <q-separator vertical inset />
        <NavbarRight />
      </div>
    </q-header>

    <ComponentDrawer
      :leftDrawerOpen="leftDrawerOpen"
      />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script lang="ts">
import ComponentDrawer from 'components/Structure/MainDrawer/Drawer.vue'
import NavbarRight from 'components/Structure/NavbarRight.vue'
import Footer from 'components/Structure/Footer.vue'
import { mdiInstagram , mdiFacebook, mdiTwitter } from '@quasar/extras/mdi-v5'
import { defineComponent, ref } from '@vue/composition-api'
 
export default defineComponent({
  name: 'MainLayout',
  components: {
    ComponentDrawer,
    Footer,
    NavbarRight,
  },
  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const mailingList = ref('')
    const toggleDrawer = () => {
      leftDrawerOpen.value  = !leftDrawerOpen.value
      console.log(leftDrawerOpen.value)
    }

    return {
      toggleDrawer,
      leftDrawerOpen,
      search,
      mailingList,
      mdiInstagram,
      mdiFacebook,
      mdiTwitter
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