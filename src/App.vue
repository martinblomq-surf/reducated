<template>
    <Layout :hasscrolled="scrolled" blah="hej">
        <router-view />
    </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ],
      bodyAttrs: {
        class: ['loaded']
      },
    }
  },
  data(){
    return{
      scrolled:false,
    }
  },
  mounted(){
      document.addEventListener('scroll', this.scrollHandle)
  },
  methods:{
    scrollHandle(){
        let body = document.body;
        if(window.scrollY > 0 && !body.className.includes('scrolled')) {
          this.scrolled = true;
          body.classList.add('scrolled');
        } else if (window.scrollY == 0) {
          this.scrolled = false;
          body.classList.remove('scrolled');
        }
    }
  }
}
</script>
