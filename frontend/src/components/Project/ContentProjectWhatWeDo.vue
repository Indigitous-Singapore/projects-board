<template>
<div>
  <div class="text-h4 q-mb-md">
    What We Do
  </div>
  <div
    v-html="project.aboutWhatWeDo"
    />
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

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
