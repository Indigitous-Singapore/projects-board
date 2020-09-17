<template>
  <div class="column full-width justify-center text-center q-pa-xl">
    <h2 class="text-weight-bold">How it works</h2>
    <h4 class="self-center" style="max-width:635px;">Discover and collaborate with digital projects from communities all over Singapore</h4>
    <div class="row self-center justify-between q-mt-lg">
      <q-card flat style="width:400px" v-for="sec in howitworks" :key="sec.title">
        <q-card-section class="row justify-center">
          <q-skeleton size="222px"/>
        </q-card-section>
        <q-card-section>
          <h3 class="text-weight-bold q-mb-md">{{sec.title}} </h3>
          <h5>{{sec.text}}</h5>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'HowItWorksSection',
  components: {
  },
  setup () {
    const howitworks =[
      { title: 'Explore', text: 'Discover different digital projects led by various communities based in Singapore' },
      { title: 'Connect', text: 'Connect with projects you are passionate about and engage in meaningful conversations' },
      { title: 'Collaborate', text: 'Partner and support project owners to realise ideas that would impact the lives of people' }
    ]
    return {
      howitworks
    }
  }
})
</script>