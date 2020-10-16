<template>
<q-card flat bordered class="q-mb-lg volunteer-position">
  <q-card-section>
    <div class="row">
      <div class="q-pt-xs col-12 col-sm-8 col-md-9 col-lg-10">
        <h4 class="q-mb-sm"><strong>{{ position.title }}</strong></h4>
        <div class="text-caption text-grey-7 q-mb-sm">{{ position.commitment }}</div>
        <div class="q-mb-md"
          v-if="position && Array.isArray(position.skills)"
          >
          <q-chip
            v-for="skill in position.skills"
            :key="skill"
            class="q-ml-none q-mr-md q-px-lg q-py-md"
            size="sm">
            {{ skill }}
          </q-chip>
        </div>
        <div
          :class="'q-mb-sm description ' + ((expanded === true) ? 'expanded' : '')"
          >
          {{ position.description }}
        </div>
        <a
          href="#"
          @click="toggleExpand"
          class="text-grey-6">
          Read More
        </a>
      </div>

      <div class="flex flex-center text-right col-12 col-sm-4 col-md-3 col-lg-2">
        <q-btn
          type="a"
          target="_blank"
          unelevated
          color="accent"
          label="connect"
          class="q-px-lg connect"
          size="md"
          rounded
          :href="`mailto:${project.user.email}?subject=Collaboration on ${project.title} as ${position.title}`"
          />
      </div>
    </div>
  </q-card-section>
</q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectContentPosition',
  props: {
    project: {
      type: Object,
    },
    position: {
      type: Object
    }
  },
  setup () {
    const expanded = ref(false)
    const toggleExpand = (evt: { preventDefault: () => void; }) => {
      evt.preventDefault()
      expanded.value = !expanded.value
    }

    return {
      expanded,
      toggleExpand
    }
  }
});
</script>

<style scoped lang="scss">
.volunteer-position {
  border-color: $grey-6;
  border-width: 2px;
  border-radius: 15px;
  padding: 24px;

  @media (max-width: 767px) {
    padding: 0px 0;
  }

  .description {
    transition: all 1s ease-in-out;
    height: 3em;
    overflow: hidden;
  }
  .expanded {
    height: auto;
  }

  .connect {
    @media (max-width: 767px) {
      margin-top: 28px;
      width: 100%;
    }
  }
}
</style>
