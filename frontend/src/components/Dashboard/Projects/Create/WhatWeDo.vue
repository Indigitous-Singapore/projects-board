<template>
<q-step
  :name="name"
  :prefix="name"
  title="What We Do"
>
  <div class="row q-gutter-lg">
    <div class="col">
      <q-card
        class="q-py-md"
        >
        <q-card-section>
          <b>What We Do</b>
          <q-input type="textarea" v-model="whatWeDo" />
        </q-card-section>
      </q-card>
    </div>
  </div>

  <q-stepper-navigation>
    <q-btn @click="nextStep" color="primary" label="Continue" />
  </q-stepper-navigation>
</q-step>
</template>


<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'WhatWeDo',
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
    const whatWeDo: Ref<string> = ref('')

    return {
      whatWeDo,
    }
  }
});
</script>