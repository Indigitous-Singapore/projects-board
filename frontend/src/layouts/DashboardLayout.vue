<template>
  <q-layout view="hHh lpR fff">
    <q-header bordered class="bg-white text-black">
      <q-banner inline-actions class="bg-primary text-white">
        We are currently in <b>beta</b>! We apologise if you experience any bugs.
        <template v-slot:action>
          <a href="mailto:developer@indigitous.sg" target="_blank" class="text-white" style="text-decoration:none">
            Contact Us
          </a>
        </template>
      </q-banner>
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
          </div>
        </q-toolbar>
        <NavbarAppLauncher />
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

    <Footer class="gt-sm" />
  </q-layout>
</template>

<script lang="ts">
import ComponentDrawer from 'components/Structure/MainDrawer/Drawer.vue'
import NavbarAppLauncher from 'components/Structure/NavbarAppLauncher.vue'
import NavbarRight from 'components/Structure/NavbarRight.vue'
import Footer from 'components/Structure/Footer.vue'
import { mdiInstagram , mdiFacebook, mdiTwitter } from '@quasar/extras/mdi-v5'
import { defineComponent, ref } from '@vue/composition-api'
 
export default defineComponent({
  name: 'MainLayout',
  components: {
    ComponentDrawer,
    Footer,
    NavbarAppLauncher,
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