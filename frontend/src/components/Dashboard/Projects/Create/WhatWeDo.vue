<template>
<div class="row q-gutter-lg">
  <div class="col">
    <q-card
      flat
      bordered
      class="q-py-md bg-grey-1"
      >
      <q-card-section>
        <b>What We Do</b>
        <q-input type="textarea" v-model="whatWeDo" />
      </q-card-section>
    </q-card>
  </div>
</div>
</template>


<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'WhatWeDo',
  setup() {
    const whatWeDo: Ref<string> = ref('')

    return {
      whatWeDo,
    }
  }
});
</script>