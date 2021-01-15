<template>
    <section class="topblock--wrapper bg-white topblock--mockup" :class="[(extraclass), (showmock)]">
        <div class="container z-2" :class="mockup ? 'container-topblock' : ''">
            <div class="flex flex-row flex-wrap topblock--mockup--row text-center" :class="center ? 'justify-center' : 'md:text-left'">
                <div class="px-6 w-full " :class="center ? 'padding-topblock md:w-8/12 ' + centerclass : 'md:w-6/12 topblock--mockup__text topblock--mockup__text--productpage'">
                    <div class="topblock--mockup__text--productpage--icon--wrapper mb-2 md:mb-3" v-if="icon">
                        <g-image :src="require('@/assets/img/'+icon)" class="topblock--mockup__text--productpage--icon md:ml-0 mx-auto block" />
                    </div>
                    <h1 class="m-0" v-html="headline"></h1>
                    <h3 v-if="top_headline" class="text-xl m-0 font-light" :class="theme ? ('text-'+theme) : 'text-primary-500'">{{ top_headline }}</h3>
                    <div class="blurb" :class="center ? '' : 'md:ml-0'" v-html="blurb"></div>
                    <div class="btn--wrapper" v-if="btn">
                        <primary-btn 
                            :title=btn.label
                            :link=btn.link
                        />
                    </div>
                </div>
                <div class="px-6 md:w-6/12 topblock--mockup__img topblock--mockup__img--productpage md:flex hidden" v-if="mockup">
                    <div class="topblock--mockup__img--pic background background--mockup flex-grow" :style="{ backgroundImage: 'url(' + require('@/assets/img/' + mockup) + ')' }"></div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import PrimaryBtn from '~/components/buttons/Primary.vue'
    export default {
        props:{
            'headline':String, 
            'blurb':String, 
            'top_headline':String,
            'btn':Object,
            'extraclass':String,
            'icon':String,
            'theme':String,
            'mockup':String,
            'center':Boolean,
            'centerclass':String
        },
        data(){
            return{
                showmock:''
            }
        },
        mounted(){
            this.showmock = 'mockup--visible';
            //document.body.classList.add("header-filled");
        },
        destroyed(){
            //document.body.classList.remove("header-filled");
        },
        components:{PrimaryBtn}
    };
</script>