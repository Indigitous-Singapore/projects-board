<template>
<div id="content-how-you-can-help">
  <h3 class="q-mb-md">
    Join The Cause
  </h3>
  <div class="row">
    <div class="col-12 col-md-8">
      <p>We currently need help in these areas, if you’re interested and passionate to join our cause, get connected with us we’d love to hear from you!</p>
    </div>
  </div>
  
  <div
    v-if="Array.isArray(project.openPositions) && project.openPositions.length > 0"
    >
    <ContentPosition
      v-for="(position, index) in project.openPositions"
      :key="index"
      :position="position"
      />
  </div>
  <div v-else>
    <h3 class="q-my-xl text-grey-9">We don't have any positions currently open.</h3>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ContentPosition from './ContentPosition.vue'

export default defineComponent({
  name: 'ProjectContentHowYouCanHelp',
  components: {
    ContentPosition,
  },
  props: {
    project: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
});
</script>

<style scoped lang="scss">
#content-how-you-can-help {
  max-width: 1170px;
  margin: 0 auto;
}
</style>