<template>
  <q-page>
    <ExploreBanner />
    <div class="container">
      <div class="row q-py-xl">
        <div class="col-12 col-sm-3">
          <h4 class="xs-hide"><b>Filters</b></h4>
          <div class="xs-hide">
            <ExploreFilters
              :updateCurrentField="updateCurrentField"
              :state="state"
              :fields="fields"
              :causes="causes"
              />
          </div>
          <q-dialog
            v-model="dialogIsOpen"
            >
            <q-card
              class="dialog-filters"
              >
              <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Filters</div>
                <q-space />
                <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>

              <q-card-section>
                <ExploreFilters
                  :updateCurrentField="updateCurrentField"
                  :state="state"
                  :fields="fields"
                  :causes="causes"
                  />
              </q-card-section>
            </q-card>
          </q-dialog>
        </div>
        <div
          v-if="loading" 
          class="col-12 col-sm-9 flex justify-center items-center"
          >
          <q-spinner-tail
            size="140px"
            color="accent"
            />
        </div>
        <div
          v-else
          class="col-12 col-sm-9"
          >
          <!--
          <ExploreSearch
            v-if="projectsState.projects.length > 0"
            />
          <q-separator
            v-if="projectsState.projects.length > 0"
            spaced="xl"
            />
          -->
          <h3>
            <b>Search Results</b>
            <q-btn
              icon="filter_alt"
              class="sm-hide md-hide lg-hide xl-hide q-mt-xs float-right"
              color="accent"
              label="Filters"
              @click="toggleFilter"
              flat
              size="sm"
              />
          </h3>
          <q-separator
            spaced="xl"
            />
          <ExploreContent />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import _ from 'lodash'
import { defineComponent, onBeforeMount, reactive, ref, Ref, watch } from '@vue/composition-api'
import { useProjects } from '../../services/projects'
import { InterfaceProject } from 'src/interfaces'
import ExploreBanner from '../../components/Explore/ExploreBanner.vue'
import ExploreContent from '../../components/Explore/ExploreContent.vue'
import ExploreFilters from '../../components/Explore/ExploreFilters.vue'
import ExploreSearch from '../../components/Explore/ExploreSearch.vue'


export default defineComponent({
  name: 'ExploreHeader',
  components: {
    ExploreBanner,
    ExploreContent,
    ExploreFilters,
    ExploreSearch
  },
  setup (props, ctx) {
    const loading = ref(true)
    const dialogIsOpen = ref(false)
    const defaultStateCauses: Record<string, boolean> = {
      'theUnreached': true
    }
    const causes: Ref<Record<string, string>> = ref({
      'theUnreached': 'The Unreached'
    })
    const fields: Ref<Record<string, string>> = ref({
      'all': 'All Fields',
      'fundraising': 'Fundraising',
      'technology': 'Technology',
      'evangelism': 'Evangelism',
      'outreach': 'Outreach',
      'worship': 'Worship'
    })
    const { 
      state: projectsState,
      getProjects
    } = useProjects()
    const state = reactive({
      field: 'all',
      causes: {...defaultStateCauses}
    })

    /**
     * Lifecyle
     */
    onBeforeMount(async () => {
      await getFilteredProjects()
    })

    /**
     * Gets the projects based on the filters
     */
    const getFilteredProjects = async () => {
      const causes: string[] = []
      // console.log('causes', state.causes)
      Object.keys(state.causes).forEach(cause => {
        if(state.causes[cause] === true){
          causes.push(cause)
        }
      })
      await getProjects(
        [state.field],
        causes,
      )
      loading.value = false
    }

    /**
     * Updates the current FIELD to the selected one
     * 
     * @param {string} key
     */
    const updateCurrentField = (key: string): void => {
      state.field = key.toString()
    }

    /**
     * Toggles the filter
     */
    const toggleFilter = () => {
      dialogIsOpen.value = !dialogIsOpen.value
    }

    /**
     * Observers
     */
    watch(state, getFilteredProjects)

    return {
      causes,
      dialogIsOpen,
      fields,
      loading,
      state,
      projectsState,
      toggleFilter,
      updateCurrentField,
    }
  }
})
</script>

<style scoped lang="scss">
.dialog-filters {
  width: 100%;
}
</style>
