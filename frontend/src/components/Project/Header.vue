<template>
<div id="header" class="row q-col-gutter-xl">
  <div class="column col-12 col-md-6">
    <h1 class="q-mb-md md-hide lg-hide xl-hide">{{ project.title }}</h1>
    <h3 class="text-grey-7 md-hide lg-hide xl-hide">{{ project.caption }}</h3>
    <q-img
      :ratio="16/9"
      :src="project.displayPictureUrl" 
      :alt="project.title"
      />
  </div>
  <div class="column col-12 col-md-6">
    <h1 class="q-mb-sm xs-hide sm-hide">{{ project.title }}</h1>
    <h3 class="text-grey-7 xs-hide sm-hide">{{ project.caption }}</h3>

    <div class="row items-center">
      <img
        class="flex author-displayPicture"
        :src="project.user.displayPictureUrl"
        :alt="project.user.firstName"
        />
      <h5 class="flex author-name q-mb-none q-pl-md">
        {{ project.user.firstName }}&nbsp;{{ project.user.lastName }}
      </h5>
    </div>

    <div class="row q-pt-lg">
      <div>
        <h5 class="q-mb-none"><b>Looking for</b></h5>
        <q-chip class="q-ml-none q-px-lg q-py-md">
          Developer
        </q-chip>
        <q-chip class="q-px-lg q-py-md">
          Designer
        </q-chip>
      </div>
    </div>

    <div class="row q-pt-lg">
      <q-btn
        class="btn-collaborate"
        rounded
        unelevated
        color="accent"
        label="Collaborate"
        />
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ProjectHeader',
  props: {
    project: {
      type: Object,
      default: () => {
        return {}
      }
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
