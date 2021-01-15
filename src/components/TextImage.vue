<template>
    <section class="text-image__block--outer bg-white relative" :class="[(padding), (reverse ? 'text-image__block--outer--reversed' : '')]">
        <div class="text-image__block--behindmockup background md:w-5/12 hidden md:block" :class="(reverse ? 'text-image__block--behindmockup--right' : 'text-image__block--behindmockup--left')" v-if="behindmockup" :style="{ backgroundImage: `url(${behindmockup})` }"></div>
        <div class="container" :class="mockup ? 'container--text-mockup' : ''">
            <div class="flex flex-col md:flex-row m-0 justify-between text-center md:text-left" :class="(reverse ? 'md:flex-row-reverse' : '')">
                <div class="flex text-image__block--image--outer p-0 w-full" :class="mockup ? 'md:w-6/12' : 'md:w-5/12'">
                    <div v-if="toolbox && toolbox.length > 0" class="flex justify-center items-center">
                        <div class="toolbox__block--outer flex flex-row flex-wrap items-center justify-center">
                            <div v-for="(tool, i) in toolbox" :key="i" class="p-2 toolbox__block--wrapper">
                                <div class="rounded-full p-6 shadow-2xl bg-white">
                                    <div class="toolbox__block bg-contain bg-center bg-no-repeat" :style="{ backgroundImage: 'url(' + require('!!assets-loader?width=auto!~/assets/img/' + tool).src + ')' }"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="mockup" class="text-image__block--image--mockup background w-full" :class="bg ? '' : 'background--mockup'" :style="{ backgroundImage: `url(${mockup})` }"></div>
                    <div v-if="img" class="text-image__block--image background w-full rounded-md" :style="{ backgroundImage: `url(${img})` }"></div>
                    <div class="moving--circle bg-primary-100 bg-opacity-20" v-if="!hidecircle"></div>
                </div>
                <div class="text-image__block--content py-6 md:py-20" :class="[mockup ? 'md:my-5 md:w-5/12' : 'md:my-4 md:w-6/12', mockup && quote ? 'bg-dark-900 text-white px-5 rounded shadow-lg big--quote--icon' : '']">
                    <div class="text-image__block--icon--wrapper mb-2 md:mb-3" v-if="icon">
                        <g-image :src="icon" class="text-image__block--icon mx-auto md:ml-0 block" />
                    </div>
                    <h3 class="h6 font-bold" :class="[(theme ? 'text-'+theme : (mockup ? 'text-primary-500' : 'text-dark-900'))]" v-if="subheadline">{{ subheadline }}</h3>
                    <h2 v-html="headline" :class="mockup ? 'text-dark-800' : ''" v-if="headline"></h2>
                    <div v-html="body" v-if="body"></div>
                    <blockquote v-if="quote">
                        <span v-html="quote" :class="mockup ? 'lead italic position-relative' : ''"></span>
                        <footer>
                            <div class="quote--footer flex items-center flex-row md:mb-0 mb-8 justify-center md:justify-start">
                                <div class="quote--footer--icon" v-if="!mockup"></div>
                                <div class="quote--footer--by">
                                    <p class="font-bold m-0" :class="mockup ? 'text-yellow' : ''">{{ byperson }}</p>
                                    <p class="font-light m-0 text-xs">{{ bytitle }}</p>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                    <div class="btn--wrapper md:mt-4" v-if="btn">
                        <primary-btn 
                            :title=btn.title
                            :link=btn.link
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import PrimaryBtn from '~/components/buttons/Primary.vue'
    export default {
        props:{
            'padding':String,
            'headline':String,
            'subheadline':String,
            'quote':String,
            'btn':Object,
            'reverse':Boolean,
            'img':String,
            'byperson':String,
            'bytitle':String,
            'body':String,
            'hidecircle':Boolean,
            'mockup':String,
            'behindmockup':String,
            'theme':String,
            'icon':String,
            'bg':Boolean,
            'toolbox':Array
        },
        components:{
            PrimaryBtn
        }
    }
</script>