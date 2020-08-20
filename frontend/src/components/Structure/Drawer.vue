<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    content-class="bg-grey-1"
  >
    <q-list>
      <EssentialLink
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>
</template>

<script>
import EssentialLink from 'components/Structure/EssentialLink.vue'

export default {
  name: 'ComponentDrawer',
  components: {
    EssentialLink,
  },
  props: {
    leftDrawerOpen: {
      type: Boolean,
      default: true
    }
  },
  setup(props, ctx) {


    const essentialLinks = [
      {
        title: 'Home',
        // caption: 'quasar.dev',
        icon: 'home',
        link: '/'
      },
      {
        title: 'About',
        // caption: 'quasar.dev',
        icon: 'info',
        link: '/about'
      },
      {
        title: 'Explore',
        // caption: 'quasar.dev',
        icon: 'search',
        link: '/explore'
      },
    ]

    return {
      essentialLinks,
    }
  }
}
</script>
