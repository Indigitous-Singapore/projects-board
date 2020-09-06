<template>
<div id="content-faqs">
  <div class="text-h4 q-mb-md">
    Frequently Asked Questions
  </div>
  <div
    v-html="project.faqs"
    />
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectContentFaqs',
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
<style scoped lang="scss">
#content-faqs {
  max-width: 1170px;
  margin: 0 auto;
}
</style>
