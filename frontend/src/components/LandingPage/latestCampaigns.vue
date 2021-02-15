<template>
  <div class="column full-width justify-center text-center q-pa-md-xl q-pa-xs-none">
    <div class="row q-px-xl justify-center">
        <h2 class="text-weight-bold">Latest Projects</h2>
    </div>
    <div class="row justify-center q-pa-md-xl q-pa-xs-none">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-xs-12"
        v-for="(project, index) in state.projects"
        :key="index"
        >
        <project-card
          :project="project"
          class="q-mr-lg q-mb-md"
        />
      </div>
    </div>
    <!--
    <div class="row justify-center">
      <q-btn
        label="See all"
        outline
        rounded
        size="18px"
        class="q-my-xl q-px-xl"
        />
    </div>
    -->
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import ProjectCard from '../Common/ProjectCard.vue'
import config from '../../config/config'
import { useProjects } from '../../services/projects'

export default defineComponent({
  name: 'LatestCampaignSection',
  components: {
    ProjectCard
  },
  setup () {
    const { state, getProjects } = useProjects()

    onMounted(async () => {
      await getProjects()
    })

    return {
      state,
      config,
    }
  }
})
</script>