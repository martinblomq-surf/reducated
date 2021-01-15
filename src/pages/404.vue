<template>
  <main>
    <top-block
      headline="404 - Something went missing!"
      extraclass="bg-primary-200 bg-opacity-10"
      blurb="<p>Oops, this isn't right. You probably got here for one of these two reasons: Either we moved the page and forgot to clean behind us and redirect it, or you typed the URL wrong. It's probably the first one. Try to return to the start page and navigate from there to find what you were looking for. Or you can always hit us up by mailing <a href='mailto:info@surfboard.se'>info@surfboard.se</a></p>"
      :btn="{
        label:'Return to the startpage',
        link:'/'
      }"
      :hidewaves=true
    />
  </main>
</template>

<script>
import TopBlock from '~/components/TopBlock.vue'
import CtaBlock from '~/components/CtaBlock.vue'
import PrimaryBtn from '~/components/buttons/Primary.vue'

let componentName = 'error';
let pageName = '404';

export default {
  name: componentName,
  metaInfo: {
    title: pageName,
    meta: []
  },
  components: {
    TopBlock,
    PrimaryBtn
  }
}
</script>
