<template>
<q-step
  :name="name"
  :prefix="name"
  title="About Our Story"
  :done="step && name && step > name"
>
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

  <StepperNavigation
    :step="step"
    :nextStep="nextStep"
    :previousStep="previousStep"
    />
</q-step>
</template>


<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'

import StepperNavigation from './StepperNavigation.vue'

export default defineComponent({
  name: 'AboutOurStory',
  components: {
    StepperNavigation,
  },
  props: {
    name: {
      type: Number
    },
    nextStep: {
      type: Function
    },
    previousStep: {
      type: Function
    },
    step: {
      type: Number
    },
  },
  setup() {
    const ourStory: Ref<string> = ref('')

    return {
      ourStory,
    }
  }
});
</script>