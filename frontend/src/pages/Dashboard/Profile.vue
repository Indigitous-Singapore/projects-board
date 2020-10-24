<template>
  <q-page class="container">
    <DashboardHeader
      title="Dashboard"
      />
    <div class="row">
      <div class="column col-xs-12">
        <iframe
          class="full-width iframe"
          :src="`https://docs.google.com/forms/d/e/1FAIpQLSfzA9bXIbvcjyz_Q6b08NVdz5O3R0QZ4RzFjNpKdEx4w9muCQ/viewform?usp=pp_url&entry.1415111703=${user.firstName}%20${user.lastName}&entry.408680681=${user.email}`"
          />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DashboardHeader from 'components/Structure/DashboardHeader.vue'
import { useUser } from '../../services/user'

export default defineComponent({
  name: 'PageDashboardHome',
  components: {
    DashboardHeader,
  },
  setup (props, ctx) {
    const { user } = useUser()

    return {
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
