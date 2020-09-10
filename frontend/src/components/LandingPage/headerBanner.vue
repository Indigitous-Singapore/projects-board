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
      <q-carousel-slide name="1" class="" img-src="~assets/landingbanner.jpg" style="background-color: rgba(0,0,0,.5);background-blend-mode: multiply;}">
        <div class="row text-white items-center fit">
          <div class="offset-2" style="width:500px;">
            <h1 class="text-weight-bold q-mb-md" style="font-size:50px;line-height:61px">
              Advancing God's kingdom in the digital space
            </h1>
            <p class="q-mb-lg" style="font-size:18px;line-height:23px; width:444px;">
              Join in the pursuit of digital missional projects through a connected and collaborative community 
            </p>
            <div class="row" style="width:401px">
              <q-btn color="accent" label="Explore" rounded size="18px" class="q-mr-lg" style="width:45%" />
              <q-btn color="grey-4" text-color="accent" label="About" rounded size="18px" style="width:45%" />
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