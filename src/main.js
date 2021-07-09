// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'
import './assets/tailwind.css'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

config.autoAddCss = false;
library.add(faInstagram, faTwitter, faEnvelope)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component

  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Vanessa,Pashkoff,Early Childhood Education,Teaching,Consulting'
  })

  head.meta.push({
    name: 'description',
    content: 'Vanessa Pashkoff, Early Childhood Education Consultant'
  })

  head.meta.push({
    name: 'author',
    content: 'vanessa Pashkoff'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })
}


