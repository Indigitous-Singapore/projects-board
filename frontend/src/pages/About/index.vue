<template>
  <q-page class="container">
    <div class="row q-py-lg q-col-gutter-xl">
      <div class="column col-12 col-md-6">
        <h1>Connecting Harvest to Labourers in the Digital Space</h1>
        <p>We started Launchpad with an intention to connect the Christian community and to drive digital missions. We think that there is a discovery gap between project founders and Christians with the means to contribute, whether materially or in expertise, and we offer this platform as a bridge between the two.</p>
        <p>With COVID-19, the digital movement within the Church is accelerating. More organisations and people are now planning or embarking on their <b>digital mission</b> projects.
        <p>Thus the need of tapping on a wider body of Christ to find the needed resources and manpower is now more vital than ever.</p>
      </div>
      <div class="column col-12 col-md-6 justify-center">
        <q-img
          class="image"
          src="../../assets/build.png"
          />
      </div>
    </div>

    <div class="row q-py-lg">
      <div class="column col-12">
        <q-separator  spaced="xl"/>
      </div>
    </div>

    <div class="row q-py-lg">
      <div class="column col-12">
        <h1 class="text-center q-mb-sm">We are Indigitous</h1>
      </div>
    </div>

    
    <div class="row q-py-lg q-col-gutter-xl">
      <div class="column col-12 col-md-6 justify-center">
        <q-img
          src="https://indigitous.org/wp-content/uploads/2014/04/ind_logo_transparent.png"
          />
      </div>
      <div class="column col-12 col-md-6 justify-center">
        <h4>INDIGENOUS + DIGITAL</h4>
        <p>Indigitous Singapore is a volunteer-led, globally-connected community of Christ followers who desire to use our talents for God in the digital space.</p>
        <p>Each of us has been blessed with God-given talents, in the spheres of design, tech, strategy or business. In the marketplace, our skills are used in the service of companies and customers. In Indigitous, we use them to create for God.</p>
        <p>As screens invade our lives and people are born as digital natives – what new challenges will our future generations face? What can technology do for missions and the global church?</p>
        <p><a href="https://www.indigitous.sg" target="_blank">www.indigitous.sg</a></p>
        <p>
          <q-btn
            unelevated 
            class="q-mr-sm"
            style="background: #0088cc; color: white"
            icon="fab fa-telegram-plane"
            size="sm"
            padding="10px"
            type="a"
            target="_blank"
            href="https://ndgt.sg/tg"
            />
          <q-btn 
            unelevated 
            class="q-mr-sm"
            style="background: #3B5998; color: white"
            icon="fab fa-facebook-f"
            size="sm"
            padding="10px"
            type="a"
            target="_blank"
            href="https://www.facebook.com/indigitousSG/"
            />
          <q-btn 
            unelevated 
            style="background: #ea2c59; color: white"
            icon="fab fa-instagram"
            size="sm"
            padding="10px"
            type="a"
            target="_blank"
            href="https://www.instagram.com/indigitous.sg/"
            />
        </p>
      </div>
    </div>

    <div class="row q-py-lg">
      <div class="column col-12">
        <q-separator spaced="xl"/>
      </div>
    </div>

    <div class="row q-py-lg">
      <div class="column col-12">
        <h1 class="text-center q-mb-sm">How It Works</h1>
      </div>
      <div class="column col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        <h4 class="text-center q-mb-none">Discover and collaborate with digital projects from communities all over Singapore</h4>
      </div>
    </div>

    <div class="row q-py-lg q-col-gutter-xl">
      <div class="column col-12 col-md-6">
        <q-img
          class="image"
          src="../../assets/launch.png"
          />
      </div>
      <div class="column col-12 col-md-6 justify-center">
        <h5 class="q-mb-xs"><b>EXPLORE</b></h5>
        <p>Browse a variety of initiatives and projects from the Christian community.</p>

        <h5 class="q-mt-md q-mb-xs"><b>DISCOVER</b></h5>
        <p>Dig deep into each project – its team, the heart of the project, and its spiritual grounding.</p>

        <h5 class="q-mt-md q-mb-xs"><b>CONTRIBUTE</b></h5>
        <p>Match your God-given talents to the current needs of the project, and submit your interest to help.</p>

        <h5 class="q-mt-md q-mb-xs"><b>LAUNCH</b></h5>
        <p>Start a project of your own, or find help for your existing initiatives. God will provide.</p>
      </div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'PageAboutIndex',

});
</script>

<style scoped lang="scss">
h1 {
  font-weight: 700;
}
.image {
  max-width: 100%;
  width: 360px;
  margin: 0 auto;
}
</style>
