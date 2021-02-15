<template>
<q-step
  :name="name"
  title="Before We Begin"
  :prefix="name"
  :done="step > 1"
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
  <q-stepper-navigation>
    <q-btn @click="nextStep" color="primary" label="Continue" />
  </q-stepper-navigation>
</q-step>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'BeforeWeBegin',
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
  setup(props) {
    return {
    }
  }
});
</script>