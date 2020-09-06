<template>
<div>
  <div class="text-h4 q-mb-md">
    Commitment
  </div>
  <div
    v-html="project.aboutCommitment"
    />
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

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
