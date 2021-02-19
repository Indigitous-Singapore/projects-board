<template>
<q-step
  :name="name"
  :prefix="name"
  title="About The Project"
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
          <b>Project</b>
          <q-input v-model="title" placeholder="Project Title" />
          <q-input type="textarea" v-model="caption" placeholder="Short Description" maxlength="30"/>
        </q-card-section>
      </q-card>
    </div>
    <div class="col">
      <q-card
        flat
        bordered
        class="q-py-md bg-grey-1"
        >
        <q-card-section>
          <b>Details</b>
          <q-select
            class="q-pb-lg"
            v-model="status"
            :options="statuses"
            label="Status"
            />
          <q-select
            class="q-pb-lg"
            v-model="cause"
            :options="causes"
            label="Cause" 
            option-value="id"
            option-label="title"
            />
          <q-select
            v-model="field"
            :options="fields"
            label="Field" 
            option-value="id"
            option-label="title"
            />
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
import { defineComponent, Ref, ref, onBeforeMount } from '@vue/composition-api'

import StepperNavigation from './StepperNavigation.vue'

import { useCauses } from '../../../../services/causes'
import { useFields } from '../../../../services/fields'

export default defineComponent({
  name: 'AboutTheProject',
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
    const title: Ref<string> = ref('')
    const caption: Ref<string> = ref('')

    const { getCauses, state: causes} = useCauses()
    const { getFields, state: fields} = useFields()

    const status: Ref<string> = ref('active')
    const statuses = [
      'active',
      'inactive',
      'cancelled',
      'completed'
    ]

    const cause: Ref<string | undefined> = ref()
    const field: Ref<string | undefined> = ref()

    onBeforeMount(() => {
      void getCauses()
      void getFields()
    })

    return {
      caption,
      cause,
      causes,
      field,
      fields,
      status,
      statuses,
      title,
    }
  }
});
</script>