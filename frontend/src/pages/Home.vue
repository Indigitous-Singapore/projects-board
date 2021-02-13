<template>
  <q-page class="column items-center">
    <header-banner />
    <div class="q-pa-xl full-width column items-center">
      <q-separator inset />
      <how-it-works />
      <q-separator inset />
      <latest-campaigns />
      <q-separator inset />
      <gods-heart />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import HeaderBanner from '../components/LandingPage/headerBanner.vue'
import HowItWorks from '../components/LandingPage/howItWorks.vue'
import LatestCampaigns from '../components/LandingPage/latestCampaigns.vue'
import GodsHeart from '../components/LandingPage/GodsHeart.vue'
export default defineComponent({
  name: 'LandingPage',
  components: {
    HeaderBanner,
    HowItWorks,
    LatestCampaigns,
    GodsHeart
  },
  setup () {
    return {
    }
  }
})
</script>
