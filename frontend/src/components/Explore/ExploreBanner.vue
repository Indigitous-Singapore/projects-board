<template>
  <div class="full-width">
    <q-parallax
      src="~assets/landingbanner.jpg"
      :height="250"
    >
      <div class="column text-white text-center fit row justify-center" style="background-color: rgba(0,0,0,.5);background-blend-mode: multiply;}">
        <h1>Launchpad by Indigitous</h1>
        <p >Join in the pursuit of digital missional projects through<br> a connected and collaborative community </p>
      </div>
    </q-parallax>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'HeaderBannerSection',
  components: {
  },
  setup () {
    const slide = ref('1')
    return {
      slide
    }
  }
})
</script>
<style lang="scss" scoped>
</style>