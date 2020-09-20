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
          <div class="offset-md-2 offset-xs-1 col-xs-10 col-md-4" style="max-width:500px;">
            <h1 class="text-weight-bold q-mb-md banner-h1">
              Advancing God's kingdom in the digital space
            </h1>
            <p class="q-mb-lg banner-p" style="max-width:444px;">
              Join in the pursuit of digital missional projects through a connected and collaborative community 
            </p>
            <div class="row justify-xs-between" style="max-width:401px">
              <q-btn color="accent" label="Explore" rounded size="1em" class="q-mr-md-lg q-mr-sm-sm" style="width:45%" />
              <q-btn color="grey-4" text-color="accent" label="About" rounded size="1em" style="width:45%" />
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
<style lang="scss" scoped>
body.screen--xs {
  .banner-h1 {
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: center;
  }
  .banner-p {
    font-size: 1em;
    line-height: 1em;
    text-align: center
  }
}
body.screen--md {
  .banner-h1 {
    font-size: 2.3em;
    line-height: 1.3em;
    text-align: left;
  }
  .banner-p {
    font-size: 1.3em;
    line-height: 1em;
    text-align: left
  }
}
</style>