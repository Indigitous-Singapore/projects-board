<template>
  <div class="q-pa-md">
    <q-table
      grid
      :data="projects"
      :columns="tableOptions.columns"
      row-key="id"
      :filter="tableOptions.filter"
      hide-header
      :pagination.sync="tableOptions.pagination"
      :rows-per-page-options="rowsPerPageOptions"
    >
      <template v-slot:item="props">
        <div class="q-pa-sm col-xs-12 col-sm-6 col-md-3">
          <project-card
            :img="props.row.displayPictureUrl"
            :category="props.row.causes"
            :title="props.row.title"
            :description="props.row.caption"
            :tags="props.row.fields"
            class="q-ma-sm block"
          />
        </div>
      </template>
    </q-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed } from '@vue/composition-api'
import { useProjects } from '../../services/projects'
import ProjectCard from '../Common/ProjectCard.vue'
import  { Screen } from 'quasar'

export default defineComponent({
  name: 'ExploreGrid',
  components: {
    ProjectCard
  },
  setup () {
    const { getProjects } = useProjects()
    const projects = ref(getProjects())

    const getItemsPerPage = () => {
      if (Screen.lt.sm) {
        return 3
      }
      if (Screen.lt.md) {
        return 6
      }
      return 9
    }

    const tableOptions = reactive({
      columns: [
        { name: 'id', required: true, label: 'id', field: 'id' },
        { name: 'title', required: true, label: 'Title', field: 'title' },
        { name: 'caption', required: true, label: 'Caption', field: 'calories' },
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
      projects,
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