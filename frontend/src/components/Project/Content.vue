<template>
<div class="row q-col-gutter-xl q-mt-sm q-mb-xl">
  <div class="column col-12">
    <q-separator
      color="grey-5"
      />

    <q-tabs
        v-model="data.tab"
        dense
        class="text-grey-100 ndgt-outer-tabs"
        active-color="black"
        active-bg-color="transparent"
        indicator-color="black"
        align="left"
        no-caps
      >
        <q-tab name="project" label="Project" />
        <q-tab name="how-you-can-help" label="How you can help" />
        <q-tab name="faqs" label="FAQs" />
      </q-tabs>

      <q-separator
        color="grey-5"
        />

      <q-tab-panels v-model="data.tab" animated class="ndgt-inner-tabs">
        <q-tab-panel name="project" class="q-pa-none">
          <q-splitter v-model="data.splitterModel" class="transparent xs-hide">
            <template v-slot:before>
              <q-tabs
                v-model="data.innerTab"
                vertical
                class="text-grey-5 q-pt-lg"
                active-color="black"
                indicator-color="transparent"                
                no-caps
              >
                <q-tab name="innerOurStory" label="OUR STORY" />
                <q-tab name="innerWhatWeDo" label="WHAT WE DO" />
                <q-tab name="innerCommitment" label="COMMITMENT" />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="data.innerTab"
                animated
              >
                <q-tab-panel name="innerOurStory" class="q-my-lg q-px-none">
                  <ContentProjectOurStory :project="project" />
                </q-tab-panel>
                <q-tab-panel name="innerWhatWeDo" class="q-my-lg q-px-none">
                  <ContentProjectWhatWeDo :project="project" />
                </q-tab-panel>
                <q-tab-panel name="innerCommitment" class="q-my-lg q-px-none">
                  <ContentProjectCommitment :project="project" />
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>

          <div class="sm-hide md-hide lg-hide xl-hide q-mt-xl">
            <ContentProjectOurStory :project="project" />
            <q-separator class="q-my-xl"/>
            <ContentProjectWhatWeDo :project="project" />
            <q-separator class="q-my-xl"/>
            <ContentProjectCommitment :project="project" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="how-you-can-help" class="q-my-lg q-px-none">
          <ContentHowYouCanHelp
            :project="project"
            />
        </q-tab-panel>

        <q-tab-panel name="faqs" class="q-my-lg q-px-none">
          <ContentFaqs
            :project="project"
            />
        </q-tab-panel>
      </q-tab-panels>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import ContentProjectOurStory from './ContentProjectOurStory.vue'
import ContentProjectWhatWeDo from './ContentProjectWhatWeDo.vue'
import ContentProjectCommitment from './ContentProjectCommitment.vue'
import ContentHowYouCanHelp from './ContentHowYouCanHelp.vue'
import ContentFaqs from './ContentFaqs.vue'

export default defineComponent({
  name: 'ProjectContent',
  components: {
    ContentProjectOurStory,
    ContentProjectWhatWeDo,
    ContentProjectCommitment,
    ContentHowYouCanHelp,
    ContentFaqs,
  },
  props: {
    project: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup () {
    const data = reactive({
      tab: 'project',
      innerTab: 'innerOurStory',
      splitterModel: 15
    })

    return {
      data
    }
  }
});
</script>