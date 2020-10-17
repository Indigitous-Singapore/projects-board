<template>
<div class="filters">
  <div class="project-fields">
    <h5 class="text-grey-6 q-mb-sm xs-hide">PROJECT FIELDS</h5>
    <q-list
      id="project-fields"
      >
      <q-item
        v-for="(label, key) of fields"
        :key="key"
        :class="'q-py-none project-field ' + ((String(key) === state.field) ? 'q-item--active' : '')"
        @click="() => { updateCurrentField(key.toString()) }"
        clickable
        >
        {{ label }}
      </q-item>
    </q-list>
  </div>

  <div class="separator">
    <q-separator spaced="2em" inset="true" style="margin-left: -6px"/>
  </div>

  <div class="project-causes">
    <h5 class="text-grey-6 q-mb-sm xs-hide">CAUSES</h5>
    <q-list
      id="project-causes">
      <q-checkbox
        v-for="(label, cause) of causes"
        class="project-cause"
        v-model="state.causes[cause]"
        :key="cause"
        :label="label"
        />
    </q-list>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref, watch } from '@vue/composition-api'
import { useProjects } from '../../services/projects'
import { InterfaceProject } from 'src/interfaces'

export default defineComponent({
  name: 'ExploreFilters',
  props: {
    updateCurrentField: {
      type: Function,
      default: (key: string) => {
        return key
      }
    },
    state: {
      type: Object,
      default: {}
    },
    causes: {
      type: Object,
      default: {}
    },
    fields: {
      type: Object,
      default: {}
    },
  }
})
</script>

<style scoped lang="scss">
@media (max-width: 767px) {
  .filters {
    flex-direction: row !important;
    width: 100%;
  }
  .projects-fields {
    flex: 4;
    display: flex;
  }
  .project-field {
    font-size: 0.8em;
    line-height: 1.25em;
    min-height: 1.25em;
  }
  .projects-causes {
    flex: 6;
    display: flex;
  }
  .project-cause {
    font-size: 0.8em;
    line-height: 1.25em;
    min-height: 1.25em;
  }
}

.filters {
  display: flex;
  flex-direction: column
}
.project-field {
  line-height: 2.5em;
  min-height: 2.5em;
  color: $grey-8;
  margin-left: -15px;

  &:hover {
    color: $grey-9;
    background-color: transparent !important;
  }
  &.q-item--active {
    color: $grey-10;
    font-weight: 700;
  }
}
.project-cause {
  margin-left: -8px;
}
</style>