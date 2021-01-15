<template>
  <div class="layout">
    <Nav :scrolled="$attrs.hasscrolled" :sitename="$static.metadata.siteName" />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import Nav from '~/components/Nav.vue';
import Footer from '~/components/Footer.vue';
export default {
  inheritAttrs:false,
  components: {
    Nav,
    Footer
  },
  data(){
    return{
      hasScrolled:false
    }
  },
  mounted(){
    console.log(this.$attrs.hasscrolled);
  }
}
</script>