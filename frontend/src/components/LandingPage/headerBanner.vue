<template>
  <div class="full-width">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      navigation
      infinite
      height="50vh"
      padding
    >
      <q-carousel-slide name="1" class="" img-src="~assets/landingbanner.jpg" style="background-color: linear-gradient(90deg, #000000 -13.4%, rgba(68, 68, 68, 0) 68.85%);background-blend-mode: darken;">
        <div class="row text-white items-center fit">
          <div class="col-3 offset-2">
            <h1 class="text-weight-bold">
              Advancing God's kingdom in the digital space
            </h1>
            <p>
              Join in the pursuit of digital missional projects through a connected and collaborative community 
            </p>
            <div class="row justify-between">
              <q-btn color="accent" label="Explore" rounded style="width:40%" />
              <q-btn outline text-color="black" label="About" rounded style="width:40%" />
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="2">
        <q-skeleton height="150px" />
      </q-carousel-slide>
      <q-carousel-slide name="3">
        <q-skeleton height="150px" />
      </q-carousel-slide>

      <q-carousel-slide name="4">
        <q-skeleton height="150px" />
      </q-carousel-slide>
    </q-carousel>
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