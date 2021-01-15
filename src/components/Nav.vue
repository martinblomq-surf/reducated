<template>
    <div class="p-4 fixed inset-x-0 top-0 w-full py-1 px-2 z-999">
        <header class="header transition-all duration-200 py-3 px-8 flex flex-row items-center rounded-md" :class="[(showNav ? 'nav--open' : ''),(scrolled ? 'bg-blue-900 bg-opacity-85 text-white' : '')]">
            <g-link to="/" :title="sitename" class="header--logo">
                <span @click="closeNav" class="d-block" :class="scrolled ? 'text-white' : 'text-blue-900'">
                    <logo />
                </span>
            </g-link>
            <nav class="nav md:pl-10 flex flex-row items-center justify-between flex-grow">
                <div class="flex md:flex-row items-center">
                    <div class="relative w-full md:w-auto" v-for="(navlink, i) in navLinks" :key="i" :class="(navlink.hasChildren ? 'nav__link--parent--wrapper' : '')">
                        <g-link class="nav__link font-semibold" :class="[(navlink.hasChildren ? 'nav__link--parent' : ''), (scrolled ? 'text-white' : 'text-blue-900')]" :to="navlink.link">{{ navlink.label }}</g-link>
                        <span v-if="navlink.hasChildren" class="toggle-child inline-block md:hidden cursor-pointer" @click="navlink.showChild = ! navlink.showChild" :class="navlink.showChild ? 'toggled' : ''"></span>
                        
                        <ul class="nav__link--child--wrapper md:block" v-if="navlink.hasChildren && navlink.childrenType != 'platform'" :class="navlink.showChild ? 'show--mobile-child' : ''">
                            <li class="nav__link--child--li" v-for="(navchild, j) in navlink.children" :key="j">
                                <g-link class="nav__link--child" :to="navchild.link">{{ navchild.label }}</g-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="relative md:flex md:flex-row md:items-center">
                    <g-link class="rounded-md py-3 px-6 text-sm hover:bg-blue-500 hover:bg-opacity-100 hover:text-white font-semibold" :class="scrolled ? 'bg-white text-blue-900' : 'bg-blue-100 text-blue-500 bg-opacity-50'" to="/request-trial/">
                        Free trial
                    </g-link>
                    <a href="#/" target="_blank" class="text-sm font-semibold md:ml-4 flex flex-row items-center hover:underline md:pl-4 md:border-l md:py-2 md:border-opacity-10" :class="scrolled ? 'md:border-white text-white hover:text-blue-200' : 'md:border-blue-200 text-blue-500 hover:text-blue-300'">
                        <svg class="w-4 h-4 fill-current mr-1" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172"><g><path d="M86,0c-39.99,0 -73.59069,27.46983 -83.17253,64.5h14.80924c9.159,-29.0465 36.33545,-50.16667 68.36328,-50.16667c39.517,0 71.66667,32.14967 71.66667,71.66667c0,39.517 -32.14967,71.66667 -71.66667,71.66667c-32.02783,0 -59.20428,-21.12017 -68.36328,-50.16667h-14.80924c9.58183,37.03017 43.18253,64.5 83.17253,64.5c47.42183,0 86,-38.57817 86,-86c0,-47.42183 -38.57817,-86 -86,-86zM78.83333,57.33333v21.5h-78.83333v14.33333h78.83333v21.5l40.3125,-28.66667z"></path></g></svg>
                        Login
                    </a>
                </div>
            </nav>
            <div class="hamburger--wrapper d-block md:hidden">
                <button class="hamburger hamburger--collapse" type="button" aria-label="Menu" aria-controls="navigation" @click="toggleNav" :class="(showNav ? 'is-active' : '')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </header>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
    props:{'sitename':String,'scrolled':Boolean},
    data(){
        return{
            showNav:false,
            toggleChildren:[
                true, true, false, false, false, false
            ],
            navLinks:[
                {
                    label:'Features',
                    link:'/features/',
                    hasChildren:false
                },
                {
                    label:'Pricing',
                    link:'/pricing/',
                    hasChildren:false
                },
                {
                    label:'FAQ',
                    link:'/faq/',
                    hasChildren:false
                },
                {
                    label:'Contact',
                    link:'/contact/',
                    hasChildren:false
                },
            ]
        }
    },
    watch: {
        '$route' () {
        this.showNav = false;
        }
    },
    methods:{
        toggleNav(){
            this.showNav = !this.showNav
        },
        closeNav(){
            if(this.showNav)
                this.showNav = false
        }
    },
    components:{
        Logo
    }
}
</script>