<template>
<q-step
  :name="name"
  title="Before We Begin"
  :prefix="name"
  :done="step && step > 1"
>
  <p>We are currently in Beta, and curating a set of great Digital Missions to share with our community. To submit a project, please fill in the following details.</p>
  <p>This form will take approximately 15 minutes to complete</p>
  <p>
    Criteria:
    <ol>
      <li>Must have an evangelistic element</li>
      <li>Should not be purely profit-driven</li>
    </ol>
  </p>

  <StepperNavigation
    :step="step"
    :nextStep="nextStep"
    :previousStep="previousStep"
    />
</q-step>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import StepperNavigation from './StepperNavigation.vue'

export default defineComponent({
  name: 'BeforeWeBegin',
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
    return {
    }
  }
});
</script>