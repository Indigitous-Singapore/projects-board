<template>
  <div class="column full-width justify-center text-center q-pa-xl">
    <h2 class="text-weight-bold">What’s has God laid upon your heart?</h2>
    <h4 class="self-center" style="max-width:635px;">Discover what the God is doing through these projects</h4>
    <div class="row self-center justify-between q-mt-lg">
      <q-card flat style="width:150px" v-for="sec in heart" :key="sec.title" class="q-mx-lg">
        <q-card-section class="column text-center">
          <q-img :src="sec.img" />
          <h4 class="text-weight-bold text-center">{{sec.title}} </h4>
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center">
      <q-btn label="Explore" outline rounded size="18px" style="width:178px" class="q-my-xl" />
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
      { title: 'Poor', img: 'https://via.placeholder.com/96.png' },
      { title: 'Lost', img: 'https://via.placeholder.com/96.png' },
      { title: 'Hurting', img: 'https://via.placeholder.com/96.png' },
      { title: 'Oppressed', img: 'https://via.placeholder.com/96.png' },
      { title: 'Church', img: 'https://via.placeholder.com/96.png' }
    ]
    return {
      heart
    }
  }
})
</script>