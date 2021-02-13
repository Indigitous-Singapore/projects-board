<template>
  <q-card
    v-if="project"
    class="flex project-card q-mt-xl"
    >
    <q-card-section
      class="text-left q-pa-none row"
      style="width: 100%"
      >
      <div class="column col-12 col-sm-6 col-md-5 col-lg-4">
        <router-link
          class="flex project-image"
          :style="`background-image: url(${project.displayPictureUrl.url});`"
          :to="'/projects/' + project.id"
          ></router-link>
      </div>
      <div class="column col-sm-6 col-md-4 col-lg-5 q-px-lg q-py-md">
        <div class="text-overline text-blue-8">
          <span
            class="text-blue-9 q-ml-none q-mr-sm"
            v-for="field in project.fields"
            :key="field.id"
            >
            {{ field.title }}
          </span>
        </div> 
        <div class="text-h5 text-weight-bold q-mb-md ellipsis-2-lines">
          {{ project.title }}
        </div>
        <div class="q-mb-md">
          <q-chip
            square
            color="orange-3"
            v-for="cause in project.causes"
            :key="cause.id"
            >
            <small>{{ cause.title }}</small>
          </q-chip>
        </div>
        <div class="text-p ellipsis-3-lines text-grey-8">
          {{ project.caption }}
        </div>
      </div>
      <div class="column col-sm-12 col-md-3 col-lg-3 flex justify-center">
        <q-btn
          class="q-mb-md q-mx-md q-py-xs"
          color="accent"
          outline
          rounded
          no-caps
          label="Edit Project"
          :to="`/dashboard/projects/${project.id}`"
          />
        <q-btn
          class="q-mx-md q-py-xs"
          color="grey-7"
          unelevated
          rounded
          no-caps
          label="View Project"
          type="a"
          target="_blank"
          :href="`/projects/${project.id}`"
          />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectCardHorizontal',
  props: {
    project: Object
  }
})
</script>

<style scoped lang="scss">
.project-card {
  border-radius: 15px;
}
.project-image {
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 150px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}
</style>