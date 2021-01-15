// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/assets/styles.scss')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  
  Vue.filter('colorize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value + '&shad=10&con=30&sat=-30&gam=30&blend=00BBFF&blend-mode=multiply'
  })
}
