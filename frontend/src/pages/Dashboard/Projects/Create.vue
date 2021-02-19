<template>
  <q-page class="container">
    <DashboardHeader
      title="Start A Project"
      />
    <div class="row">
      <div class="column col-md-12">
        <q-stepper
          v-model="currentStep"
          ref="stepper"
          done-color="green-9"
          active-color="orange-8"
          inactive-color="grey-5"
          animated
        >
          <q-step
            v-for="(step, index) in steps"
            :key="index"
            :name="index"
            :prefix="index"
            :title="step.title"
            :done="currentStep && currentStep > index"
          >
            <component v-bind:is="step.component" />
          </q-step>
          
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn
                @click="$refs.stepper.next()"
                color="primary"
                :label="currentStep === steps.length ? 'Finish' : 'Continue'"
                />
              <q-btn
                v-if="currentStep > 0"
                flat
                color="primary"
                @click="$refs.stepper.previous()"
                label="Back"
                class="q-ml-sm"
                />
            </q-stepper-navigation>
          </template>
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
  setup (_props, ctx) {
    const { user } = useUser()
    const currentStep: Ref<number> = ref(0)

    const steps = [
      {
        title: 'Before We Begin',
        component: BeforeWeBegin,
      },
      {
        title: 'About The Project',
        component: AboutTheProject,
      },
      {
        title: 'About Our Story',
        component: AboutOurStory,
      },
      {
        title: 'What We Do',
        component: WhatWeDo,
      },
      {
        title: 'Faqs',
        component: Faqs,
      },
      {
        title: 'Positions',
        component: Positions,
      }
    ]

    return {
      currentStep,
      steps,
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
