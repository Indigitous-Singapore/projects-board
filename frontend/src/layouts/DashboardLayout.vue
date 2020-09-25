<template>
  <q-layout view="hHh lpR fff">
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
            <img src="../assets/placeholder.com-logo4.png" style="width:150px" class="q-mr-lg q-ml-md"/>
          </router-link>
        </q-toolbar>
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
import ComponentDrawer from 'components/Structure/Drawer.vue'
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
  setup (_, ctx) {
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