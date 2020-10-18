<template>
  <q-layout view="hHh Lpr lff" style="background-color: rgb(246, 246, 246)">
    <q-header bordered class="bg-white text-black xl-hide lg-hide md-hide sm-hide">
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
            <img src="../assets/logo.png" style="width: 150px" class="q-mr-lg q-ml-md"/>
          </router-link>
        </q-toolbar>
      </div>
    </q-header>
    
    <ComponentDrawer
      :leftDrawerOpen="leftDrawerOpen"
      />

    <q-page-container>
      <q-banner inline-actions class="bg-primary text-white">
        We are currently in <b>beta</b>! We apologise if you experience any bugs.
        <template v-slot:action>
          <a href="mailto:developer@indigitous.sg" target="_blank" class="text-white" style="text-decoration:none">
            Contact Us
          </a>
        </template>
      </q-banner>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import ComponentDrawer from 'components/Structure/DashboardDrawer/Drawer.vue'
import NavbarRight from 'components/Structure/NavbarRight.vue'
import Footer from 'components/Structure/Footer.vue'
import { mdiInstagram , mdiFacebook, mdiTwitter } from '@quasar/extras/mdi-v5'
import { defineComponent, ref } from '@vue/composition-api'
import { Screen } from 'quasar'
 
export default defineComponent({
  name: 'DashboardLayout',
  components: {
    ComponentDrawer,
    NavbarRight,
    Footer
  },
  setup () {
    const leftDrawerOpen = ref(Screen.gt.sm)
    const search = ref('')
    const mailingList = ref('')
    const toggleDrawer = () => {
      leftDrawerOpen.value  = !leftDrawerOpen.value
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