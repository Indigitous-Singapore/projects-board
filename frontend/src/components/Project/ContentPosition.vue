<template>
<q-card flat bordered class="q-py-lg q-px-lg q-mb-lg volunteer-position">
  <q-card-section horizontal>
    <q-card-section class="q-pt-xs">
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
    </q-card-section>

    <q-card-section class="flex flex-center justify-end text-right">
      <q-btn
        unelevated
        color="accent"
        label="connect"
        class="q-px-lg"
        size="md"
        rounded
        />
    </q-card-section>
  </q-card-section>
</q-card>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectContentPosition',
  props: {
    position: {
      type: Object
    }
  },
  setup (props, ctx) {
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

  .description {
    transition: all 1s ease-in-out;
    height: 3em;
    overflow: hidden;
  }
  .expanded {
    height: auto;
  }
}
</style>
