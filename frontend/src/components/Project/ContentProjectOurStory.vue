<template>
<div>
  <div class="text-h4 q-mb-md">
    About The Project
  </div>
  <div
    v-html="project.aboutOurStory"
    />
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectContentProjectOurStory',
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
