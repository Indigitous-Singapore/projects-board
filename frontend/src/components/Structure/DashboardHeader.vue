<template>
<h1 class="dashboard-header h3">{{ title }}</h1>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.dashboard-header {
  font-weight: 700;
  font-size: 2.5em;
}
</style>