<template>
<div v-if="user" class="row">
  <div class="column col-xs-5 col-sm-4 col-md-3 col-lg-2">
    <img
      :src="user.displayPictureUrl"
      class="display-picture"
      />
  </div>
  <div class="column col-xs-7 col-sm-8 col-md-9 col-lg-10 justify-between">
    <h2 class="q-mb-none"><b>{{ user.firstName }} {{user.lastName}}</b></h2>
    <div class="text-grey-9">
      {{ user.email }}
      <br/>
      Joined on {{ user.createdAtFormatted }}
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useUser } from '../../../services/user'

export default defineComponent({
  name: 'ComponentDashboardHomeHeader',
  setup () {
    const { user } = useUser()

    return {
      user
    }
  }
})
</script>
<style lang="scss" scoped>
.display-picture {
  width: 140px;
  height: 140px;
  border-radius: 70px;
}
</style>
