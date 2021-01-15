<template>
    <main>
        <top-block
            headline="Terms of Service"
            blurb="<p>Read about our Marketing Permissions</p>"
        />
        <text-block
          text="<p>Surfboard will use the information you provide with the forms to be in touch with you and to provide updates and marketing.</p>
                <p>You can change your mind at any time by clicking the unsubscribe link in the footer of any email you receive from us, or by contacting us at <a href='mailto:info@surfboard.se'>info@surfboard.se</a>. We will treat your information with respect. For more information about our privacy practices please visit our website.</p>"
        />
    </main>
</template>

<script>
import TopBlock from '~/components/TopBlock.vue';
import TextBlock from '~/components/TextBlock.vue';

let componentName = 'Terms';
let pageName = 'Terms of Service';

export default {
  name: componentName,
  metaInfo: {
    title: pageName,
    meta: [
      { 
        key: 'description', 
        name: 'description', 
        content: 'Our terms of Service.'
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
    TextBlock
  }
}
</script>