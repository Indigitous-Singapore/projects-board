<template>
<q-step
  :name="name"
  :prefix="name"
  title="Available Position(s)"
>
  <div class="row q-gutter-lg">
    <div class="col">
      <template v-for="(position, index) in positions">
        <q-card class="q-py-md q-mb-md">
          <q-card-section>
            <div class="row q-gutter-md" :key="index">
              <div class="col-10 col-sm-5">
                <q-input :value="position.title" @change="(ev) => updatePosition(index, 'title', ev)" placeholder="Title" class="q-pb-lg" />
                <q-input :value="position.commitment" @change="(ev) => updatePosition(index, 'commitment', ev)" placeholder="Commitment" />
              </div>
              <div class="col-10 col-sm-5">
                <q-input type="textarea" :value="position.description" @change="(ev) => updatePosition(index, 'description', ev)" placeholder="Description" />
              </div>
              <div class="col-1 text-right">
                <q-btn
                  v-if="positions.length > 0"
                  @click="() => deletePosition(index)"
                  round
                  unelevated
                  color="red-7"
                  icon="cancel"
                  />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </template>
      <q-btn @click="addPosition" size="md" color="secondary">
        Add New Position
      </q-btn>
    </div>
  </div>

  <q-stepper-navigation>
    <q-btn @click="nextStep" color="primary" label="Continue" />
  </q-stepper-navigation>
</q-step>
</template>


<script lang="ts">
import { defineComponent, onBeforeMount, Ref, ref, watch } from '@vue/composition-api'

export default defineComponent({
  name: 'Positions',
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
    const positions: Ref<any> = ref([])
    const deletePosition = (positionIndex: number) => {
      const newPositions = positions.value.filter((position, index) => index !== positionIndex)
      positions.value = newPositions
    }
    const addPosition = () => {
      const newPositions = [...positions.value]
      newPositions.push({
        title: '',
        description: '',
        commitment: '',
      })
      positions.value = newPositions
    }
    const updatePosition = (index, attribute, ev) => {
      if (!positions.value[index]) addPositions()
      positions.value[index][attribute] = ev.target.value
    }

    onBeforeMount(() => {
      addPosition()
    })

    return {
      positions,
      addPosition,
      deletePosition,
      updatePosition,
    }
  }
});
</script>