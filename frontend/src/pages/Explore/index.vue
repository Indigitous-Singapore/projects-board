<template>
  <q-page class="column">
    <explore-banner />
    <div class="row full-height">
      <div class="col-3">
      </div>
      <div class="col-9">
        <explore-content />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ExploreBanner from '../../components/Explore/ExploreBanner.vue'
import ExploreContent from '../../components/Explore/ExploreContent.vue'
import ExploreFilters from '../../components/Explore/ExploreFilters.vue'
import ExploreSearch from '../../components/Explore/ExploreSearch.vue'


export default defineComponent({
  name: 'ExploreHeader',
  components: {
    ExploreBanner,
    ExploreContent,
    ExploreFilters,
    ExploreSearch
  },
  setup () {
    return {
    }
  }
})
</script>
<style lang="scss" scoped>
</style>