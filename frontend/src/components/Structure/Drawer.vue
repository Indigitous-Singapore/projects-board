<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    class='full-height'
  >
    <q-list>
      <q-item>
        <q-item-section class="col justify-center">
          <img src="../../assets/placeholder.com-logo4.png" style="width:150px" class="self-center" />
        </q-item-section>
      </q-item>
      <q-item to="/project" exact>
        <q-item-section>
          <q-btn color="accent" bg-color="white" outline rounded label="START A PROJECT" class="accent" />
        </q-item-section>
      </q-item>
      <!-- No Login for now
      <q-item to="/login" exact>
        <q-item-section>
          <q-btn color="transparent" text-color="black" flat label="LOG IN" />
        </q-item-section>
      </q-item> --> 
      <q-separator />
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
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'ComponentDrawer',
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
