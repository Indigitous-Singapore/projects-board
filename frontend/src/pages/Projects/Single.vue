<template>
  <q-page>
    <div
      v-if="project !== undefined"
      class="container"
      >
      <ProjectHeader
        :project="project"
        />
      <ProjectContent
        :project="project"
        />
    </div>
    <div v-else>
    </div>
  </q-page>
</template>

<script lang="ts">
import { ref, Ref, watch, onBeforeMount } from '@vue/composition-api'
import { useProjects } from '../../services/projects'
import { InterfaceProject } from 'src/interfaces'
import { defineComponent } from '@vue/composition-api'

import ProjectHeader from '../../components/Project/Header.vue'
import ProjectContent from '../../components/Project/Content.vue'

export default defineComponent({
  name: 'PageProjectsSingle',
  components: {
    ProjectHeader,
    ProjectContent
  },
  setup (props, ctx) {
    const id = ctx.root.$route.params.projectId
    const loading = ref(true)
    const project: Ref<InterfaceProject | undefined> = ref()

    const { state, getProject, getProjects } = useProjects()

    const updateProject = () => {
      project.value = state.projects.find(project => String(project.id) === ctx.root.$route.params.projectId)
    }

    onBeforeMount(async () => {
      await getProject(ctx.root.$route.params.projectId)
      updateProject()
    })

    watch(
      () => state.projects,
      updateProject
    )

    return {
      project,
      loading
    }
  }
});
</script>