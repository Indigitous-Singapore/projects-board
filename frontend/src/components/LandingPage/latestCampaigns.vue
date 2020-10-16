<template>
  <div class="column full-width justify-center text-center q-pa-md-xl q-pa-xs-none">
    <div class="row q-px-xl justify-center">
        <h2 class="text-weight-bold">Latest Projects</h2>
    </div>
    <div class="row justify-center q-pa-md-xl q-pa-xs-none">
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
        <project-card
          v-for="(project, index) in state.projects"
          :key="index"
          :img="config.apiUrl + project.displayPictureUrl.url"
          :id="project.id"
          :category="project.fields"
          :title="project.title"
          :description="project.caption"
          :tags="project.causes"
          class="q-mr-md q-mb-md"
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
import { defineComponent, onMounted, reactive, watch } from '@vue/composition-api'
import ProjectCard from '../Common/ProjectCard.vue'
import config from '../../config/config'
import { useProjects } from '../../services/projects'
import { InterfaceProject } from 'src/interfaces'

export default defineComponent({
  name: 'LatestCampaignSection',
  components: {
    ProjectCard
  },
  setup (props, ctx) {
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