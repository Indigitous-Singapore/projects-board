<template>
<q-input 
  v-model="search"
  clearable
  hide-bottom-space
  outlined
  rounded
  dense
  placeholder="Search Projects"
  class="col-grow"
>
  <template v-slot:prepend>
    <q-icon name="search" color="grey-9" />
  </template>
</q-input>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'DrawerSearch',
  setup() {
    const search = ref('')
    return {
      search
    }
  }
})
</script>
