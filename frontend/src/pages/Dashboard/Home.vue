<template>
  <q-page class="container">
    <div class="row q-mt-xl">
      <div class="column col-xs-12">
        <ComponentDashboardHomeHeader />
      </div>
    </div>
    <div class="row q-mt-xl">
      <div class="column col-xs-12">
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
          <q-tab name="profile" label="Profile" />
          <q-tab name="settings" label="Settings" />
        </q-tabs>

        <q-separator
          color="grey-5"
          />

        <q-tab-panels v-model="data.tab" animated class="ndgt-inner-tabs">
          <q-tab-panel name="project" class="q-pa-none">
            <q-splitter v-model="data.splitterModel" class="transparent">
              <template v-slot:before>
                <q-tabs
                  v-model="data.innerTab"
                  vertical
                  class="text-grey-5 q-pt-lg"
                  active-color="black"
                  indicator-color="transparent"                
                  no-caps
                >
                  <q-tab name="innerMyProjects" label="My Projects" />
                  <q-tab name="innerMyCollaborations" label="My Collaborations" />
                  <q-tab name="innerNotifications" label="Notifications" />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="data.innerTab"
                  animated
                >
                  <q-tab-panel name="innerMyProjects" class="q-my-lg">
                    <ComponentDashboardHomeMyProjects />
                  </q-tab-panel>
                  <q-tab-panel name="innerMyCollaborations" class="q-my-lg">
                    <UnderConstruction />
                  </q-tab-panel>
                  <q-tab-panel name="innerNotifications" class="q-my-lg">
                    <UnderConstruction />
                  </q-tab-panel>
                </q-tab-panels>
              </template>

            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="profile" class="q-my-lg q-px-none">
            <div class="row">
              <div class="column col-12 col-sm-7">
                <ComponentDashboardProfilePersonal />
              </div>
              <div class="column col-12 col-sm-5">
                <ComponentDashboardProfileResetPassword />
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="settings" class="q-my-lg q-px-none">
            <UnderConstruction />
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import ComponentDashboardHomeHeader from 'components/Dashboard/Home/Header.vue'
import ComponentDashboardHomeMyProjects from 'components/Dashboard/Home/MyProjects.vue'
import ComponentDashboardProfilePersonal from 'components/Dashboard/Profile/Personal.vue'
import ComponentDashboardProfileResetPassword from 'components/Dashboard/Profile/ResetPassword.vue'
import UnderConstruction from 'components/Dashboard/UnderConstruction.vue'
import { useUser } from '../../services/user'

export default defineComponent({
  name: 'PageDashboardHome',
  components: {
    ComponentDashboardHomeHeader,
    ComponentDashboardHomeMyProjects,
    ComponentDashboardProfilePersonal,
    ComponentDashboardProfileResetPassword,
    UnderConstruction
  },
  setup (props, ctx) {
    const { user } = useUser()
    const data = reactive({
      tab: 'project',
      innerTab: 'innerMyProjects',
      splitterModel: 15
    })

    return {
      data,
      user
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
