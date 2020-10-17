<template>
<q-footer class="bg-grey-9 text-white visible-xs">
  <!--
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
            <q-input 
              bg-color="white"
              hide-bottom-space
              :input-style="{ backgroundColor: 'white', color: 'black' }"
              standout 
              color="accent"
              v-model="mailingList"
            >
              <template v-slot:after>
                <q-btn round color="accent" dense icon="add" style="margin-left:-30px;" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>
  </div>
  -->
  <q-toolbar>
    <div class="col-1"></div>
    <span class="q-mx-md text-caption text-grey-5">&copy; Copyright Indigitous Singapore {{ currentYear }}</span>
    <!--
    <q-separator dark vertical inset spaced="md" class="q-my-md" />
    <q-btn color="transparent" text-color="grey-5" dense flat no-caps padding="sm" label="Terms and Conditions" class="q-mx-md text-caption" />
    <q-separator dark vertical inset spaced="md" class="q-my-md text-caption" />
    <q-btn color="transparent" text-color="grey-5" dense flat no-caps padding="sm" label="Privacy" class="q-mx-md text-caption" />
    -->
  </q-toolbar>
</q-footer>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { mdiInstagram , mdiFacebook, mdiTwitter } from '@quasar/extras/mdi-v5'
export default defineComponent({
  name: 'Footer',
  setup () {
    const mailingList = ref('')
    const currentYear = new Date().getFullYear()
    return {
      currentYear,
      mdiInstagram,
      mdiFacebook,
      mdiTwitter,
      mailingList
    }
  }
})
</script>
