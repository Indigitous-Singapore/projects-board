<template>
<div>
  <h3 class="q-mb-md">
    About The Project
  </h3>
  <div
    v-html="project.aboutOurStory"
    />
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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
