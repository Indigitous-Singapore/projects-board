<template>
  <div class="row q-gutter-lg">
    <div class="col">
      <q-card
        flat
        bordered
        class="q-py-md bg-grey-1"
        >
        <q-card-section>
          <b>About Our Story</b>
          <q-input type="textarea" v-model="ourStory" placeholder="Our Story" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'

import StepperNavigation from './StepperNavigation.vue'

export default defineComponent({
  name: 'AboutOurStory',
  components: {
    StepperNavigation,
  },
  setup() {
    const ourStory: Ref<string> = ref('')

    return {
      ourStory,
    }
  }
})
</script>