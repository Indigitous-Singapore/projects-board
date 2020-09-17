<template>
  <q-drawer
    v-model="drawerOpen"
    bordered
    mini
    content-class="bg-white"
  >
    <q-list>
      <q-item to="/about" exact>
        <q-item-section>
          ABOUT
        </q-item-section>
      </q-item>
      <q-item to="/explore" exact>
        <q-item-section>
          EXPLORE
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ComponentDrawer',
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return {
       drawerOpen: props.leftDrawerOpen
    }
  }
})
</script>
