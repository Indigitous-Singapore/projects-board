<template>
<div>
  <h3 class="q-mb-md">
    Commitment
  </h3>
  <div
    v-html="project.aboutCommitment"
    />
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectContentProjectCommitment',
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
