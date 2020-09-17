<template>
  <q-card>
    <q-img :src="img" />
    <q-card-section class="text-left">
      <div class="text-overline">
        {{category}}
      </div> 
      <div class="text-h5 text-weight-bold q-mb-md ellipsis-2-lines">
        {{title}}
      </div>
      <div class="text-p ellipsis-3-lines">
        {{description}}
      </div>
    </q-card-section>
    <q-card-actions>
      <div>
       Tags: {{tags.join(', ')}}
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    img: String,
    category: String,
    title: String,
    description: String,
    tags: Array
  },
  components: {
  },
  setup () {
    return {
    }
  }
})
</script>