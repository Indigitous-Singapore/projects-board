<template>
<q-step
  :name="name"
  :prefix="name"
  title="Frequently Asked Questions (FAQs)"
>
  <div class="row q-gutter-lg">
    <div class="col">
      <q-card
        class="q-py-md"
        >
        <q-card-section>
          <q-input type="textarea" v-model="faqs" />
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
  name: 'Faqs',
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
    const faqs: Ref<string> = ref('')

    return {
      faqs,
    }
  }
});
</script>