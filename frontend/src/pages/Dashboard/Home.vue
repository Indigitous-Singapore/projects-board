<template>
  <q-page class="container">
    <DashboardHeader
      title="Dashboard"
      />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DashboardHeader from 'components/Structure/DashboardHeader.vue'

export default defineComponent({
  name: 'PageDashboardHome',
  components: {
    DashboardHeader,
  }
});
</script>

<style scoped lang="scss">
</style>
