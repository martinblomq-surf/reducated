<template>
    <section class="topblock--wrapper md:py-24 py-16 relative md:mt-16" :class="extraclass">
        <div class="md:absolute -z-1 md:right-0 md:top-0 md:h-full md:w-5/12 topblock--mockup__img md:flex hidden" v-if="mockup">
            <div class="relative z-1 topblock--mockup__img--pic bg-contain md:bg-cover bg-no-repeat bg-center md:bg-left flex-grow" :style="{ backgroundImage: 'url(' + require('!!assets-loader?!~/assets/img/' + mockup).src + ')' }"></div>
            <div class="blob--wrapper w-full h-full bg-transparent absolute top-0 right-0 text-blue-100">
                <svg viewBox="0 0 100 100" class="h-full overflow-visible w-full fill-current">
                    <g transform="translate(65 70)">
                        <path d="M34.6,-57C46.1,-53.3,57.5,-46.5,65.5,-36.5C73.4,-26.5,78,-13.3,70.7,-4.2C63.5,4.9,44.5,9.8,34.4,16.2C24.4,22.6,23.2,30.4,19,41.3C14.7,52.1,7.4,65.9,-3.6,72.1C-14.5,78.3,-29.1,76.9,-33.1,66C-37.2,55,-30.9,34.6,-36,22C-41.1,9.399999999999999,-57.6,4.699999999999999,-64.9,-4.2C-72.1,-13.1,-70.1,-26.2,-65.1,-38.9C-60.1,-51.6,-52,-63.9,-40.7,-67.6C-29.3,-71.3,-14.7,-66.5,-1.5,-63.8C11.6,-61.1,23.1,-60.6,34.6,-57Z"></path>
                    </g>
                </svg>
            </div>
        </div>
        <div class="container z-2 px-8 md:px-16">
            <div class="flex flex-row -mx-6 topblock--mockup--row">
                <div class="md:w-7/12 px-6 topblock--mockup__text md:py-24">
                    <h3 v-if="top_headline" class="text-blue-500 text-lg font-normal tracking-widest uppercase mb-2">{{ top_headline }}</h3>
                    <h1 class="text-blue-900" v-html="headline"></h1>
                    <div class="md:w-2/3 mt-3 mx-auto md:ml-0" v-html="blurb"></div>
                    <div class="btn--wrapper mt-3" v-if="btn">
                        <primary-btn 
                            :title=btn.title
                            :link=btn.link
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-4 bg-gradient-to-tr from-blue-400 to-white rounded-md -z-2 opacity-15"></div>
    </section>
</template>


<script>
    import PrimaryBtn from '~/components/buttons/Primary.vue'
    export default {
        props:{
            'headline':String, 
            'blurb':String, 
            'mockup':String,
            'top_headline':String,
            'btn':Object,
            'extraclass':String,
        },
        components:{
            PrimaryBtn
        }
    };
</script>