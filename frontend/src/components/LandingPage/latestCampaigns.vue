<template>
  <div class="column full-width justify-center text-center q-pa-md-xl q-pa-xs-none">
    <div class="row q-px-xl justify-center">
        <h2 class="text-weight-bold">Latest Projects</h2>
    </div>
    <div class="row justify-center q-pa-md-xl q-pa-xs-none">
      <project-card
        v-for="(card, index) in projects"
        :key="index"
        :img="card.img"
        :category="card.category"
        :title="card.title"
        :description="card.description"
        :tags="card.tags"
        style="max-width:270px"
        class="q-mr-md q-mb-md"
      />
    </div>
    <div class="row justify-center">
      <q-btn label="See all" outline rounded size="18px" style="width:178px" class="q-my-xl" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProjectCard from '../Common/ProjectCard.vue'
export default defineComponent({
  name: 'LatestCampaignSection',
  components: {
    ProjectCard
  },
  setup () {
    const projects = [
      { img: 'https://via.placeholder.com/271x208.png', category: 'FUNDRAISING', title: 'COVID-19 Relief Efforts for Lower Income Family', description: 'Providing support to lower income families during COVID-19.', tags: ['Families', 'Social Service'] },
      { img: 'https://via.placeholder.com/271x208.png', category: 'FUNDRAISING', title: 'COVID-19 Relief Efforts for Lower Income Family', description: 'Providing support to lower income families during COVID-19.', tags: ['Families', 'Social Service'] },
      { img: 'https://via.placeholder.com/271x208.png', category: 'FUNDRAISING', title: 'COVID-19 Relief Efforts for Lower Income Family', description: 'Providing support to lower income families during COVID-19.', tags: ['Families', 'Social Service'] },
      { img: 'https://via.placeholder.com/271x208.png', category: 'FUNDRAISING', title: 'COVID-19 Relief Efforts for Lower Income Family', description: 'Providing support to lower income families during COVID-19.', tags: ['Families', 'Social Service'] }
    ]
    return {
      projects
    }
  }
})
</script>