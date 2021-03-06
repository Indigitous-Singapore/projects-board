<template>
<div id="header" class="row q-col-gutter-xl">
  <div class="column col-12 col-md-6">
    <h1 class="q-mb-md md-hide lg-hide xl-hide">{{ project.title }}</h1>
    <h3 class="text-grey-7 md-hide lg-hide xl-hide">{{ project.caption }}</h3>
    <q-img
      :ratio="16/9"
      :src="project.displayPictureUrl.url" 
      :alt="project.title"
      />
  </div>
  <div class="column col-12 col-md-6">
    <h1 class="q-mb-sm xs-hide sm-hide">{{ project.title }}</h1>
    <h3 class="text-grey-7 xs-hide sm-hide">{{ project.caption }}</h3>

    <div class="row items-center">
      <q-img
        class="flex author-displayPicture"
        :src="project.user.displayPictureUrl.url"
        :alt="project.user.firstName"
        />
      <h5 class="flex author-name q-mb-none q-pl-md">
        {{ project.user.firstName }}&nbsp;{{ project.user.lastName }}
      </h5>
    </div>

    <div
      v-if="lookingForSkills.length > 0"
      class="row q-pt-lg">
      <div>
        <h5 class="q-mb-none"><b>Looking for</b></h5>
        <q-chip
          v-for="(skill) in lookingForSkills"
          :key="skill"
          class="q-ml-none q-px-lg q-py-md"
          >
          {{ skill }}
        </q-chip>
      </div>
    </div>

    <div class="row q-pt-lg">
      <q-btn
        type="a"
        target="_blank"
        class="btn-collaborate"
        rounded
        unelevated
        color="accent"
        label="Collaborate"
        :href="`mailto:${project.user.email}?subject=I would like to collaborate with you on ${project.title}`"
        />
    </div>
  </div>
</div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { defineComponent } from '@vue/composition-api'
import _ from 'lodash'
import { InterfaceProjectPosition, InterfaceSkill } from 'src/interfaces';
import config from '../../config/config'

export default defineComponent({
  name: 'ProjectHeader',
  props: {
    project: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props) {
    const lookingForSkills = new Set()

    props.project.openPositions.forEach((position: InterfaceProjectPosition) => {
      position.skills?.forEach((skill: InterfaceSkill) => {
        lookingForSkills.add(_.startCase(skill.title))
      })
    })

    return {
      config,
      lookingForSkills: Array.from(lookingForSkills)
    }
  }
});
</script>

<style scoped lang="scss">
#header {
  padding-top: 2em;

  @media (max-width: 1023px) {
    padding-top:1em;
  }
}
h1{
  font-weight: 600;   
  line-height: 1.2;
}

.author-displayPicture {
  height: 50px;
  width: 50px;
  border-radius: 25px;
}

.btn-collaborate {
  width: 250px;
  font-size: 1.2em;
  letter-spacing: 1px;
}
</style>
