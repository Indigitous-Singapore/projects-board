<template>
  <div id="header-banner" class="container">
    <div class="row">
      <div id="header-text" class="column col-sm-12 col-md-6 justify-center">
        <h1 class="q-mb-md">Advancing God's kingdom in the digital&nbsp;space</h1>
        <p class="text-grey-9">
          Connecting Harvest to Labourers in the&nbsp;Digital&nbsp;Space
        </p>
        <img
          class="img-responsive q-pa-md sm-hide md-hide lg-hide xl-hide"
          alt="Launchpad - collaborate"
          src="/assets/collaborate.png"
          />
        <div class="q-mt-xl justify-xs-between" style="max-width:420px">
          <q-btn color="accent" to="/explore" unelevated label="Explore" rounded size="1em" class="q-mr-md-lg q-mr-sm-sm" style="width:45%" />
          <q-btn color="grey-4" @click="goTo" flat text-color="accent" label="LEARN MORE" rounded size="1em" style="width:45%" />
        </div>
      </div>
      <div class="xs-hide flex column col-sm-12 col-md-6 q-pa-md">
        <img
          class="img-responsive q-pa-md"
          alt="Launchpad - collaborate"
          src="/assets/collaborate.png"
          />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { scroll } from 'quasar'

export default defineComponent({
  name: 'HeaderBannerSection',
  components: {
  },
  setup () {
    const { getScrollTarget, setScrollPosition } = scroll
    const goTo = () => {
      const el: HTMLElement | null = document.getElementById('how-it-works')
      
      if (el) {
        const target = getScrollTarget(el)
        const offset = el.offsetTop
        const duration = 150
        setScrollPosition(target, offset, duration)
      }
    }
    return {
      goTo
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
.img-responsive {
  max-width: 100%
}

@media (max-width: 991px) {
  #header-banner {
    margin: 0 0 1em 0;
  }
  #header-text {
    h1 {
      line-height:1.25em;
      font-size: 2.5em;
      font-weight: 600;
    }
    p {
      font-size: 1.25em;
    }
  }
}
</style>