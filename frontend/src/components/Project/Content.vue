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
          <q-splitter
            v-model="data.splitterModel"
            class="transparent"
          >

            <template v-slot:before>
              <q-tabs
                v-model="data.innerTab"
                vertical
                class="text-grey-5 ndgt-inner-tabs q-pt-xl"
                active-color="black"
                indicator-color="transparent"                
                no-caps
              >
                <q-tab
                  name="innerOurStory"
                  label="OUR STORY"
                  />
                <q-tab
                  name="innerWhatWeDo"
                  label="WHAT WE DO"
                  />
                <q-tab
                  name="innerCommitment"
                  label="COMMITMENT"
                  />
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="data.innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
                class="q-mt-xl"
              >
                <q-tab-panel name="innerOurStory">
                  <ContentProjectOurStory :project="project" />
                </q-tab-panel>

                <q-tab-panel name="innerWhatWeDo">
                  <ContentProjectWhatWeDo :project="project" />
                </q-tab-panel>

                <q-tab-panel name="innerCommitment">
                  <ContentProjectCommitment :project="project" />
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-tab-panel>

        <q-tab-panel name="how-you-can-help" class="q-pt-xl">
          <ContentHowYouCanHelp
            :project="project"
            />
        </q-tab-panel>

        <q-tab-panel name="faqs" class="q-pt-xl">
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
  setup (props, ctx) {
    const data = reactive({
      tab: 'project',
      innerTab: 'innerOurStory',
      splitterModel: 20
    })

    return {
      data
    }
  }
});
</script>

<style lang="scss">
.ndgt-outer-tabs {
  .q-tab {
    padding: 0 15px;
    margin-right: 3em;
  }
  .q-tab__content, .q-tab__label {
    width: 100%;
    text-align: left;
  }
  .q-tab--active {
    .q-tab__label {
      font-weight: 700;
    }
  }
  .q-tab__label {
    line-height: 4em;
  }
}

.transparent {
  .q-splitter__separator {
    background-color: transparent;
  }
}

.ndgt-inner-tabs {
  .q-splitter__panel{
    width: 15% !important;
  }
  .q-tab__content, .q-tab__label {
    width: 100%;
    text-align: left;
    line-height: 4em;
  }
  .q-tab__content {
    border-bottom: 1px solid $grey-4;
    margin-right: 10%;
  }
}

</style>
