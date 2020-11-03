<template>
<q-card
  class="project-card"
  >
  <router-link
    class="project-card-link"
    :to="`/projects/${project.id}`"
    >
    <q-img
      :src="project.displayPictureUrl.url"
      img-class="q-pa-sm"
      :ratio="16/9"
      basic
      cover
      />
  </router-link>
  <q-card-section class="text-left">
    <div class="q-mb-md">
      <span
        class="text-blue-9 q-ml-none q-mr-sm"
        v-for="field in project.fields"
        :key="field.id"
        >
        {{ field.title }}
      </span>
    </div> 
    <div class="text-h5 text-weight-bold q-mb-md ellipsis-2-lines">
      <router-link
        style="text-decoration: none;"
        class="project-card-link text-grey-10"
        :to="`/projects/${project.id}`"
        >
        {{ project.title }}
      </router-link>
    </div>
    <div class="text-p ellipsis-3-lines">
      {{ project.caption }}
    </div>
  </q-card-section>
  <!--
  <q-card-actions class="q-px-md">
    <div>
    Tags: {{tags}}
    </div>
  </q-card-actions>
  -->
</q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectCard',
  props: {
    project: Object
  }
})
</script>

<style scoped lang="scss">
.project-card {
  height: 420px;
}
</style>