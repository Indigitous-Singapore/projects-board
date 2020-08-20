<template>
  <q-page
    class="q-pa-xl"
    >
    <div class="row q-col-gutter-xl">
      <div class="column col-12 col-md-6">
        <img
          :src="project.displayPictureUrl" 
          :alt="project.title"
          />
      </div>
      <div class="column col-12 col-md-6">
        <h1>{{ project.title }}</h1>
        <h3 class="text-grey-7">{{ project.caption }}</h3>

        <div class="row items-center">
          <img
            class="flex author-displayPicture"
            :src="project.user.displayPictureUrl"
            :alt="project.user.firstName"
            />
          <h5 class="flex author-name q-mb-none q-pl-md">
            {{ project.user.firstName }}&nbsp;{{ project.user.lastName }}
          </h5>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue'
import { ref, Ref, watch, onBeforeMount } from '@vue/composition-api'
import { useProjects } from '../../services/projects'
import { InterfaceProject } from 'src/interfaces';

export default Vue.extend({
  name: 'PageProjectsSingle',
  setup (props, ctx) {
    const loading = ref(true)
    const project: Ref<InterfaceProject | undefined> = ref()

    const { state, getProjects } = useProjects()

    const updateProject = () => {
      console.log(state.projects)
      project.value = state.projects.find(project => project.id === Number(ctx.root.$route.params.projectId))
    }

    onBeforeMount(() => {
      getProjects()
      updateProject()
    })

    watch(
      () => state.projects,
      updateProject
    )

    return {
      project
    }
  }
});
</script>

<style scoped lang="scss">
img { 
  max-width: 100%;
}

.author-displayPicture {
  height: 50px;
  width: 50px;
  border-radius: 25px;
}

</style>
