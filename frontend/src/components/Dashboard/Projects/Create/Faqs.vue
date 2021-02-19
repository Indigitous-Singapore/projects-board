<template>
<div class="row q-gutter-lg">
  <div class="col">
    <q-card
      flat
      bordered
      class="q-py-md bg-grey-1"
      >
      <q-card-section>
        <q-input type="textarea" v-model="faqs" />
      </q-card-section>
    </q-card>
  </div>
</div>
</template>


<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Faqs',
  setup() {
    const faqs: Ref<string> = ref('')

    return {
      faqs,
    }
  }
});
</script>