<template>
  <main>
    <top-block
      headline="Who we are"
      blurb="<p>We believe fantastic companies are built by fantastic people. That’s why our culture is the foundation of all we do and our value is the bricks of the foundation</p>"
    />
    <text-image 
      subheadline="The background"
      headline="Tales from our founder"
      quote='<p>"The scenery for in store payments will change more in the next 4 years then it have in the past 40 years. Providing more value to the merchant and a better experience for the consumer. Introducing new players who understands how to leverage on a customer relationship in the moment of a transaction is what we are all about at Surfboard."</p>'
      byperson="Christopher"
      bytitle="CEO and Founder"
      :btn="{
        link: '/careers/',
        title: 'Work with Christopher',
        type: 'secondary'
      }"
      img="https://images.unsplash.com/photo-1501179880790-6e0fc09954c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80"
    />
    <cta-block 
      headline="Build surfboards with us"
      blurb="<p>Are you interested in transforming payments? We are always interested in talents - even if we don't look for a specific position. You location is not of importance, only your skills and will to improve. You know the drill: click the button below and write something about yourself and we'll take it from there 🌟</p>"
      :usewaves=true
      fillcolor="text-primary-200 text-opacity-10"
      :btn="{
        link: '/careers/',
        title: 'See open positions',
        type: 'primary'
      }"
    />
  </main>
</template>

<script>
import TopBlock from '~/components/TopBlock.vue'
import CtaBlock from '~/components/CtaBlock.vue'
import TextImage from '~/components/TextImage.vue'

let componentName = 'About';
let pageName = 'Who we are';

export default {
  name: componentName,
  metaInfo: {
    title: pageName,
    meta: [
      { 
        key: 'description', 
        name: 'description', 
        content: 'Find out about the company and people behind the next generation of in store payments.'
      },
      {
        name: 'og:title',
        property: 'og:title',
        content: pageName
      }
    ]
  },
  components: {
    TopBlock,
    CtaBlock,
    TextImage
  }
}
</script>
