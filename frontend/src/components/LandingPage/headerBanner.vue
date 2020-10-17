<template>
  <div id="header-banner" class="container">
    <div class="row">
      <div id="header-text" class="column col-sm-12 col-md-6 justify-center">
        <h1 class="q-mb-md">Advancing God's kingdom in the digital&nbsp;space</h1>
        <p class="text-grey-9">
          Connecting Harvest to Labourers in the&nbsp;Digital&nbsp;Space
        </p>
        <div class="q-mt-xl justify-xs-between" style="max-width:420px">
          <q-btn color="accent" unelevated label="Explore" rounded size="1em" class="q-mr-md-lg q-mr-sm-sm" style="width:45%" />
          <q-btn color="grey-4" flat text-color="accent" label="LEARN MORE" rounded size="1em" style="width:45%" />
        </div>
      </div>
      <div class="flex column col-sm-12 col-md-6 q-pa-md">
        <q-img
          src="/assets/collaborate.png"
          />
      </div>
    </div>
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
#header-banner {
  margin: 3em 0 1.5em 0;
}
#header-text {
  h1 {
    line-height:1.25em;
    font-size: 3.1em;
    font-weight: 600;
  }
  p {
    font-size: 1.65em;
  }
}

@media screen and (max-width: 991px) {
  
}
</style>