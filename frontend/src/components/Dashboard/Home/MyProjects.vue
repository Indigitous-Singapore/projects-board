<template>
<div class="row">
  <div class="column col-12">
    <router-link
      class="projects-new text-grey-8"
      to="/dashboard/projects/new"
      >
      <q-card
        class="text-center q-py-lg q-mb-lg"
        round
        flat
        bordered
        >
        <h6 class="q-mb-none"><b>+&nbsp;&nbsp;CREATE&nbsp;NEW&nbsp;PROJECT</b></h6>
      </q-card>
    </router-link>
    <ProjectCardHorizontal
      v-for="project in state.projects"
      :key="project.id"
      :project="project"
      />
  </div>
</div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api'
import { useProjects } from '../../../services/projects'
import { useUser } from '../../../services/user'

import ProjectCardHorizontal from '../../Common/ProjectCardHorizontal'

export default defineComponent({
  name: 'ComponentDashboardHomeMyProjects',
  components: {
    ProjectCardHorizontal,
  },
  setup (props, ctx) {
    const { user } = useUser()
    const { state, getProjects } = useProjects()

    onBeforeMount(async () => {
      await getProjects(
        ['all'],
        ['all'],
        true,
        user.value.id
      )
    })

    return {
      state
    }
  }
})
</script>
<style lang="scss" scoped>
.display-picture {
  width: 140px;
  height: 140px;
  border-radius: 70px;
}
.projects-new {
  text-decoration: none;
  .q-card {
    border-radius: 15px;
  }

  &:hover {
    .q-card {
      background-color: $grey-2;
    }
  }
}
</style>
