<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    class='full-height'
  >
    <q-list>
      <q-item>
        <q-item-section class="col justify-center q-py-lg">
          <img src="../../assets/placeholder.com-logo4.png" style="width:150px" class="self-center" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-input 
            v-model="search"
            clearable
            hide-bottom-space
            outlined
            rounded
            dense
            placeholder="Search Projects"
            class="col-grow"
          >
            <template v-slot:prepend>
              <q-icon name="search" color="grey-9" />
            </template>
          </q-input>
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
  </q-drawer>
</template>

<script>
import { defineComponent, computed, ref } from '@vue/composition-api'
import DrawerBottom from './DrawerBottom'

export default defineComponent({
  name: 'ComponentDrawer',
  components: {
    DrawerBottom
  },
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const search = ref('')
    return {
      search,
      drawerOpen: computed(() => props.leftDrawerOpen)
    }
  }
})
</script>
