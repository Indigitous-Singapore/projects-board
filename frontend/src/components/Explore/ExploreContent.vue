<template>
  <div>
    <q-table
      v-if="state.projects.length > 0"
      grid
      :data="state.projects"
      :columns="tableOptions.columns"
      row-key="id"
      :filter="tableOptions.filter"
      hide-header
      :pagination.sync="tableOptions.pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template v-slot:item="props">
        <div class="q-pa-sm col-xs-12 col-sm-6 col-md-4">
          <project-card
            :id="String(props.row.id)"
            :img="config.apiUrl + props.row.displayPictureUrl.url"
            :category="props.row.causes"
            :title="props.row.title"
            :description="props.row.caption"
            :tags="props.row.fields"
            class="q-ma-sm block"
          />
        </div>
      </template>
    </q-table>
    <div
      v-else
      class="flex column items-center justify-center"
      >
      <h4>No projects based on your filter criteria</h4>
      <div class="flex">
        <q-btn
          to="/start"
          label="how about starting one?"
          color="accent"
          size="lg"
          no-caps
          unelevated
          />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, onBeforeMount } from '@vue/composition-api'
import config from '../../config/config'
import { useProjects } from '../../services/projects'
import ProjectCard from '../Common/ProjectCard.vue'
import  { Screen } from 'quasar'

export default defineComponent({
  name: 'ExploreGrid',
  components: {
    ProjectCard
  },
  setup () {
    const { state } = useProjects()

    const getItemsPerPage = () => {
      if (Screen.lt.sm) { return 6 }
      if (Screen.lt.md) { return 9 }
      return 15
    }

    const tableOptions = reactive({
      columns: [
        { name: 'id', required: true, label: 'id', field: 'id' },
        { name: 'title', required: true, label: 'Title', field: 'title' },
        { name: 'caption', required: true, label: 'Caption', field: 'caption' },
        { name: 'displayPictureUrl', required: true, label: 'Avatar', field: 'displayPictureUrl' },
        { name: 'fields', label: 'Fields', field: 'fields' },
        { name: 'causes', label: 'Causes', field: 'causes' }
      ],
      filter: '',
      pagination: {
        page: 1,
        rowsPerPage: getItemsPerPage()
      },
    })
    return {
      config,
      state,
      tableOptions,
      rowsPerPageOptions: computed(() => {
        if (Screen.gt.xs) {
          return Screen.gt.sm ? [ 3, 6, 9 ] : [ 3, 6 ]
        }
        return [ 3 ]
      }),
      cardContainerClass: computed(() => {
        if (Screen.gt.xs) {
          return 'grid-masonry grid-masonry--' + (Screen.gt.sm ? '3' : '2')
        }
        return void 0
      })
    }
  }
})
</script>
<style lang="scss">
.grid-masonry {
  flex-direction: column;
  height: 1000px;
}
.grid-masonry--2 > div:nth-child(2n+1) {
  order: 1;
}
.grid-masonry--2 > div:nth-child(2n) {
  order: 2;
}
.grid-masonry--2:before {
  content: "";
  flex: 1 0 100% !important;
  width: 0 !important;
  order: 1;
}
.grid-masonry--3 > div:nth-child(3n+1) {
  order: 1;
}
.grid-masonry--3 > div:nth-child(3n+2) {
  order: 2;
}
.grid-masonry--3 > div:nth-child(3n) {
  order: 3;
}
.grid-masonry--3:before, .grid-masonry--3:after {
  content: "";
  flex: 1 0 100% !important;
  width: 0 !important;
  order: 2;
}
</style>