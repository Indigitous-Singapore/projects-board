<template>
  <q-page class="container">
    <DashboardHeader
      title="Create New Project"
      />
    <div class="row">
      <div class="column col-xs-12">
        <q-stepper
          v-model="step"
          vertical
          color="secondary"
          animated
          flat
          class="q-pa-none"
        >
          <BeforeWeBegin
            :name="1"
            :step="step"
            :nextStep="nextStep"
            :previousStep="previousStep"
            />

          <AboutTheProject
            :name="2"
            :step="step"
            :nextStep="nextStep"
            :previousStep="previousStep"
            />

          <AboutOurStory
            :name="3"
            :step="step"
            :nextStep="nextStep"
            :previousStep="previousStep"
            />

          <WhatWeDo
            :name="4"
            :step="step"
            :nextStep="nextStep"
            :previousStep="previousStep"
            />

          <Faqs
            :name="5"
            :step="step"
            :nextStep="nextStep"
            :previousStep="previousStep"
            />

          <Positions
            :name="6"
            :step="step"
            :nextStep="nextStep"
            :previousStep="previousStep"
            />

          <q-step
            :name="3"
            title="Create an ad"
            icon="add_comment"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.

            <q-stepper-navigation>
              <q-btn color="primary" label="Finish" />
              <q-btn flat @click="previousStep" color="primary" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api'

import { useUser } from '../../../services/user'

import DashboardHeader from 'components/Structure/DashboardHeader.vue'
import BeforeWeBegin from 'components/Dashboard/Projects/Create/BeforeWeBegin.vue'
import AboutTheProject from 'components/Dashboard/Projects/Create/AboutTheProject.vue'
import AboutOurStory from 'components/Dashboard/Projects/Create/AboutOurStory.vue'
import WhatWeDo from 'components/Dashboard/Projects/Create/WhatWeDo.vue'
import Faqs from 'components/Dashboard/Projects/Create/Faqs.vue'
import Positions from 'components/Dashboard/Projects/Create/Positions.vue'

export default defineComponent({
  name: 'PageDashboardCreateNew',
  components: {
    AboutTheProject,
    AboutOurStory,
    BeforeWeBegin,
    DashboardHeader,
    Faqs,
    Positions,
    WhatWeDo,
  },
  setup (_props, _ctx) {
    const { user } = useUser()
    const step: Ref<number> = ref(6)
    const nextStep = () => step.value++
    const previousStep = () => step.value--

    return {
      nextStep,
      previousStep,
      step,
      user,
    }
  }
});
</script>

<style scoped lang="scss">
.iframe {
  border: none;
  height: 80vh;
}
</style>
