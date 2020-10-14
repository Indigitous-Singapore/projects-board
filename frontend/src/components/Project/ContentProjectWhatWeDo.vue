<template>
<div>
  <h3 class="q-mb-md">
    What We Do
  </h3>
  <div
    v-html="project.aboutWhatWeDo"
    />
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectContentProjectWhatWeDo',
  props: {
    project: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
});
</script>
