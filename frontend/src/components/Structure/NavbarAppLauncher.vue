<template>
<q-toolbar
  id="navbar-app-launcher"
  class="col-auto"
  >
  <q-btn-dropdown
    class="q-pr-sm"
    stretch
    flat
    no-caps
    dropdown-icon="apps">

    <q-list
      class="q-py-md"
      >
      <q-item
        v-for="link in links"
        :key="link.title"
        clickable
        class="q-py-md q-px-lg"
        style="max-width: 360px"
        @click="() => goTo(link.href)"
        >
        <q-item-section
          avatar>
          <div
            class="app-launcher-icon-container">
            <img
              :src="link.image"
              :alt="link.title"
              class="app-launcher-icon"
              />
          </div>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.title }}</q-item-label>
          <q-item-label caption>{{ link.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</q-toolbar>
</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NavbarAppLauncher',
  setup () {
    const goTo = (href) => {
      window.open(href)
    }

    const links = [
      {
        "image": "https://launchpad.indigitous.sg/icons/favicon-128x128.png",
        "title": "Launchpad",
        "description": "Kickstarter For Digital Missions",
        "href": "https://launchpad.indigitious.sg"
      },
      {
        "image": "https://guides.indigitous.sg/img/grape/person-exiting-app.png",
        "title": "Guides",
        "description": "Resources and tools to help digitalise your Kingdom work",
        "href": "https://ndgt.sg"
      },
      {
        "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "title": "Open Source",
        "description": "Check out our open source projects",
        "href": "github.com/indigitous-Singapore"
      },
      {
        "image": "https://indigitous.sg/wp-content/uploads/2019/09/indigitous.icon_.jpeg",
        "title": "Indigitous Singapore",
        "description": "Find out about us",
        "href": "https://ndgt.sg"
      },
    ]

    return {
      goTo,
      links
    }
  }
})
</script>

<style lang="scss" scoped>
#navbar-app-launcher {
  @media (max-width: 991px) {
    padding-left: 0;
    padding-right:0;
  }
}

.app-launcher-icon-container,
.app-launcher-icon {
  background-color: $grey-5;
  width: 48px;
  height: 48px;
  border-radius:24px;
}
</style>