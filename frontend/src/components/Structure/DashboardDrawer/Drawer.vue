<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    class='full-height'
  >
    <q-scroll-area class="drawer-scroll-area q-pt-lg">
      <q-list>
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

        <q-separator />

        <q-item to="/logout" class="q-py-md" exact>
          <q-item-section>
            <q-btn color="accent" bg-color="white" outline rounded label="Logout" class="accent" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
    <q-img class="absolute-top drawer-profile" src="https://www.toptal.com/designers/subtlepatterns/patterns/triangle-mosaic.png" >
      <div class="absolute-bottom bg-transparent">
        <img class="logo" src="../../../assets/placeholder.com-logo4.png">
        <q-avatar size="56px" class="q-mb-sm">
          <img :src="user.displayPictureUrl">
        </q-avatar>
        <div class="text-weight-bold text-dark">{{ user.firstName }}&nbsp;{{ user.lastName }}</div>
        <div class="text-dark"><small>{{ user.email }}</small></div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

import { useUser } from '../../../services/user'

export default defineComponent({
  name: 'ComponentDrawer',
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const { user } = useUser()

    console.log(user)

    return {
      user
    }
  }
})
</script>

<style scoped lang="scss">
.logo {
  height: 20px;
  margin-bottom: 20px;
  display: block;
}
.drawer-scroll-area {
  height: calc(100% - 190px);
  margin-top: 190px;
}
.drawer-profile {
  height: 190px;
}
</style>