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
              :selectedField="selectedField"
              :selectedCauses="selectedCauses"
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
                  :selectedField="selectedField"
                  :selectedCauses="selectedCauses"
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
import { useCauses } from '../../services/causes'
import { useFields } from '../../services/fields'
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
    const defaultStateCauses: Record<string, boolean> = {}
    const causes: Ref<Record<string, string>> = ref({})
    const fields: Ref<Record<string, string>> = ref({})
    const { 
      state: projectsState,
      getProjects
    } = useProjects()
    const { 
      state: causesState,
      getCauses
    } = useCauses()
    const { 
      state: fieldsState,
      getFields
    } = useFields()

    const selectedField: Ref<string> = ref('all')
    const selectedCauses: Ref<Record<string, boolean>> = ref({})

    /**
     * Lifecyle
     */
    onBeforeMount(async () => {
      await getFilteredFields()
      await getFilteredCauses()
      await getFilteredProjects()

      /**
       * Observers
       */
      watch(selectedCauses, getFilteredProjects)
      watch(selectedField, getFilteredProjects)
    })


    /**
     * Gets Fields
     */
    const getFilteredFields = async () => {
      await getFields()
      const newFields: Record<string, string> = {
        'all': 'All Fields'
      }
      for (let field of fieldsState.value) {
        newFields[field.id] = field.title
      }
      fields.value = newFields
    }

    /**
     * Gets causes
     */
    const getFilteredCauses = async () => {
      await getCauses()
      const newCauses: Record<string, string> = {}
      const newSelectedCauses: Record<string, boolean> = {}
      for (let cause of causesState.value) {
        newCauses[cause.id] = cause.title
        newSelectedCauses[cause.id] = true
      }
      causes.value = newCauses
      selectedCauses.value = newSelectedCauses
    }

    /**
     * Gets the projects based on the filters
     */
    const getFilteredProjects = async () => {
      const causes: string[] = []
      console.log('causes', selectedCauses.value)
      Object.keys(selectedCauses.value).forEach(cause => {
        if(selectedCauses.value[cause] === true){
          causes.push(cause)
        }
      })
      await getProjects(
        [selectedField.value],
        (causes.length > 0 ? causes : ['all']),
      )
      loading.value = false
    }

    /**
     * Updates the current FIELD to the selected one
     * 
     * @param {string} key
     */
    const updateCurrentField = (key: string): void => {
      selectedField.value = key.toString()
    }

    /**
     * Toggles the filter
     */
    const toggleFilter = () => {
      dialogIsOpen.value = !dialogIsOpen.value
    }

    return {
      causes,
      dialogIsOpen,
      fields,
      loading,
      selectedCauses,
      selectedField,
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
