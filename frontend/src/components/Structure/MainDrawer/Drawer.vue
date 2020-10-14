<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    class='full-height'
  >
    <q-scroll-area class="fit">
      <q-list>
        <q-item>
          <q-item-section class="col justify-center q-py-lg">
            <img src="../../../assets/logo.png" style="width:150px" class="self-center" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <DrawerSearch />
          </q-item-section>
        </q-item>
        
        <q-separator spaced="md"/>

        <q-item to="/about" exact>
          <q-item-section>
            About
          </q-item-section>
        </q-item>
        <q-item to="/explore" exact>
          <q-item-section>
            Explore
          </q-item-section>
        </q-item>

        <q-separator spaced="md"/>

        <DrawerBottom />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import DrawerSearch from './DrawerSearch.vue'
import DrawerBottom from './DrawerBottom.vue'

export default defineComponent({
  name: 'ComponentDrawer',
  components: {
    DrawerBottom,
    DrawerSearch,
  },
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false
    }
  }
})
</script>
