<template>
<div class="row q-gutter-lg">
  <div class="col">
    <div v-if="positions.length === 0">
      <q-card class="q-px-md q-mb-md bg-grey-1" flat bordered>
        <q-card-section class="text-center">
          <p>
            <b>Looking for some help?</b>
          </p>
          <p>
            <span>Start by clicking on "Add Position"</span>
          </p>
          <q-btn
            @click="addPosition"
            size="md"
            color="secondary"
            label="Add Position"
            icon="add"
            />
        </q-card-section>
      </q-card>
    </div>
    <template v-for="(position, index) in positions">
      <q-card :key="index" class="q-px-md q-pb-md q-mb-md bg-grey-1" flat bordered>
        <q-card-section
          class="q-px-none"
          >
          <div class="row">
            <div class="col-11 col-sm-6 q-pr-lg">
              <q-input :value="position.title" @change="(ev) => updatePosition(index, 'title', ev)" placeholder="Title" class="q-pb-lg" dense />
              <q-input :value="position.commitment" @change="(ev) => updatePosition(index, 'commitment', ev)" placeholder="Commitment" class="q-pt-xs" dense />
            </div>
            <div class="col-11 col-sm-5">
              <q-input type="textarea" :value="position.description" @change="(ev) => updatePosition(index, 'description', ev)" rows="5" placeholder="Description" dense />
            </div>
            <div class="col-2 col-sm-1 flex items-start justify-end">
              <q-btn
                v-if="positions.length > 0"
                @click="() => deletePosition(index)"
                flat
                color="red-5"
                icon="cancel"
              />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </template>

    <q-btn
      v-if="positions.length > 0"
      @click="addPosition"
      size="md"
      color="secondary"
      label="Add Position"
      icon="add"
      />
  </div>
</div>
</template>


<script lang="ts">
import { defineComponent, onBeforeMount, Ref, ref } from '@vue/composition-api'
import { InterfaceProjectPosition } from 'src/interfaces';
import StepperNavigation from './StepperNavigation.vue'

export default defineComponent({
  name: 'Positions',
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
    const positions: Ref<InterfaceProjectPosition[]> = ref([])
    const deletePosition = (positionIndex: number) => {
      const newPositions = positions.value.filter((_position: InterfaceProjectPosition, index: number) => index !== positionIndex)
      positions.value = newPositions
    }
    const addPosition = () => {
      const newPositions = [...positions.value]
      newPositions.push({
        title: '',
        description: '',
        commitment: '',
        active: true
      })
      positions.value = newPositions
    }
    const updatePosition = (index: number, attribute: keyof InterfaceProjectPosition, ev: { target: { value: string } }) => {
      if (!positions.value[index]) addPosition()
      const subPosition: Record<string, string> = {}
      subPosition[attribute] = ev.target.value
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      positions.value[index] = {
        ...positions.value[index],
        ...subPosition
      }
    }

    onBeforeMount(() => {
      // addPosition()
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