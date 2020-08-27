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

    <q-footer class="bg-grey-9 text-white">
      <div class="row items-center bg-grey-4 text-grey-9 justify-center" style="height:348px;">
        <div class="col-10">
          <div class="row items-start">
            <div class="col-6 row justify-between">
              <div class="col-6">
                <h6 class="text-weight-bold q-mb-md">
                  About Us
                </h6>
                <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <div class="row">
                  <q-icon :name="mdiInstagram" size="sm" color="grey=9" class="q-mr-xl"/>
                  <q-icon :name="mdiFacebook" size="sm" color="grey=9" class="q-mr-xl" />
                  <q-icon :name="mdiTwitter" size="sm" color="grey=9" class="q-mr-xl" />
                </div>
              </div>
              <div class="col-3">
                <h6 class="text-weight-bold q-mb-md">
                  Explore
                </h6>
                <p class="q-mb-none text-caption">Fields</p>
                <p class="q-mb-none text-caption">Causes</p>
                <p class="q-mb-none text-caption">Contact</p>
              </div>
            </div>
            <div class="col-6 row justify-center">
              <div class="col-4 offset-4">
                <h6 class="text-weight-bold q-mb-md">
                  Newsletter
                </h6>
                <p>Get the latest updates and exclusive promotions from our team.
                </p>
                <q-input filled bg-color="white" color="black" v-model="mailingList">
                  <template v-slot:after>
                    <q-btn round color="accent" dense icon="add" style="margin-left:-30px;" />
                  </template>
                </q-input>
              </div>
            </div>
          </div>
        </div>
      </div>
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
import { mdiInstagram , mdiFacebook, mdiTwitter } from '@quasar/extras/mdi-v5'
import { defineComponent, ref } from '@vue/composition-api'
 
export default defineComponent({
  name: 'MainLayout',
  components: {
    ComponentDrawer,
  },
  setup () {
    const leftDrawerOpen = ref(false)
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