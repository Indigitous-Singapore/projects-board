<template>
  <div class="column full-width justify-center text-center q-pa-xl">
    <h2 class="text-weight-bold">What’s has God laid upon your heart?</h2>
    <h4 class="self-center" style="max-width:635px;">Discover what the God is doing through these projects</h4>
    <div class="row self-center justify-between q-mt-lg">
      <q-card flat style="width:150px" v-for="sec in heart" :key="sec.title" class="q-mx-lg">
        <q-card-section class="column text-center">
          <q-img
            img-class="text-center"
            :src="sec.img"
            />
          <h5 class="text-weight-bold text-center">{{sec.title}} </h5>
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center">
      <q-btn label="Explore" to="/explore" outline rounded size="18px" style="width:178px" class="q-my-xl" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'GodHeartSection',
  components: {
  },
  setup () {
    const heart =[
      { title: 'Fundraising', img: '/assets/fundraising.png' },
      { title: 'Technology', img: '/assets/technology.png' },
      { title: 'Evangelism', img: '/assets/evangelism.png' },
      { title: 'Outreach', img: '/assets/outreach.png' },
      { title: 'Worship', img: '/assets/worship.png' }
    ]
    return {
      heart
    }
  }
})
</script>