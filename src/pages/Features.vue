<template>
  <main>
    <top-block
      :top_headline="{
          text:'Reducated LXP features',
          color:'purple'
      }"
      headline="The learning experience platform"
      blurb="<p class='text-lg'>For schools, HR-departments, charities, educations and more. The only limitation for Reducate is your imagination</p>"
      mockup="templatemock.png"
      extraclass=""
      :btn="{
        link: '/request-trial/',
        title: 'Start a free trial',
        color:'purple'
      }"
    />

    <benefits 
      headline="Create impactful training sessions"
      blurb="The platform is packed with awesome features, here are just a few"
      extraclass="md:pt-12"
    />


    <cta-block 
      headline="Educate, measure the growth and stay connected"
      blurb="<p>The Learning Experience Platform (LXP) from Reducated is a tool for instant success in online training. We've used all the power to build a robust, secure and user friendly platform to reduce the friction in online education.</p>"
      extraclass="pt-0"
      :btn="{
        link: '/request-trial/',
        title: 'Start a free trial',
        color:'purple'
      }"
      gradientcolor='purple'
    />

  </main>
</template>

<script>
import TopBlock from '~/components/TopBlock.vue';
import CtaBlock from '~/components/CtaBlock.vue'
import Benefits from '~/components/Benefits.vue'

let componentName = 'Index';
let pageName = '';

export default {
  name: componentName,
  metaInfo: {
    title: pageName,
    meta: [
      { 
        key: 'description', 
        name: 'description', 
        content: ''
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: pageName
      }
    ],
  },
  components: {
    TopBlock,
    CtaBlock,
    Benefits
  },
}
</script>