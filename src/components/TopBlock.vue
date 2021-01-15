<template>
    <section class="topblock--wrapper md:py-24 py-16 relative md:mt-16" :class="extraclass">
        <div class="container z-2 px-8 md:px-16 text-center">
            <div class="flex flex-col-reverse">
                <div class="w-full h-80v md:mt-12 bg-contain bg-no-repeat bg-center flex-grow" v-if="mockup" :style="{ backgroundImage: 'url(' + require('!!assets-loader?!~/assets/img/' + mockup).src + ')' }"></div>
                <div>
                    <h3 v-if="top_headline" :class="'text-'+top_headline.color+'-500 text-lg font-normal tracking-widest uppercase mb-2'">{{ top_headline.text }}</h3>
                    <h1 v-html="headline"></h1>
                    <div class="md:w-2/3 mt-3 mx-auto" v-html="blurb"></div>
                    <div class="btn--wrapper mt-3" v-if="btn">
                        <primary-btn 
                            :title=btn.title
                            :link=btn.link
                            :color=btn.color
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-4 bg-gradient-to-tr from-purple-400 to-white rounded-md -z-1 opacity-20"></div>
    </section>
</template>


<script>
import PrimaryBtn from '~/components/buttons/Primary.vue'
    export default {
        props:{
            'headline':String, 
            'blurb':String, 
            'mockup':String,
            'top_headline':Object,
            'btn':Object,
            'extraclass':String,
        },
        components:{PrimaryBtn}
    };
</script>