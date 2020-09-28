<template>
<div id="content-faqs">
  <h3 class="q-mb-md">
    Frequently Asked Questions
  </h3>
  <div
    v-html="project.faqs"
    />
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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
