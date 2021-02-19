<template>
  <q-stepper-navigation>
    <q-btn
      v-if="step > 1"
      @click="previousStep"
      color="grey"
      label="Back"
      size="0.8em"
      icon="arrow_back"
      unelevated
      />
    <q-btn
      @click="nextStep"
      color="primary"
      label="Continue"
      size="0.8em"
      class="q-ml-sm"
      icon-right="arrow_forward"
      unelevated
      />
  </q-stepper-navigation>
</template>


<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'StepperNavigation',
  props: {
    nextStep: {
      type: Function
    },
    previousStep: {
      type: Function
    },
    step: {
      type: Number,
      default: 1
    },
  }
})
</script>