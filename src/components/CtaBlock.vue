<template>
    <section class="cta__block--outer bg-white py-0 px-8" :class="extraclass">
        <div class="rounded-md bg-gradient-to-tr to-transparent md:p-16 p-8" :class="'from-'+bgcolor+'-100'">
            <div class="cta__block text-center">
                <h2 v-html="headline"></h2>
                <div class="blurb mt-2 mb-2 md:w-1/2 md:mx-auto" v-html="blurb"></div>
                <div class="btn--wrapper">
                    <primary-btn 
                        :title=btn.title
                        :link=btn.link
                        :color=btn.color
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PrimaryBtn from '~/components/buttons/Primary.vue'
export default {
    props:{
        'extraclass':String, 
        'headline':String,
        'blurb':String,
        'btn':Object,
        'gradientcolor':String
    },
    data(){
        return{
            bgcolor:'blue'
        }
    },
    mounted(){
        if(this.gradientcolor && this.gradientcolor.length > 0){
            this.bgcolor = this.gradientcolor;
        }
    },
    components:{PrimaryBtn}
}
</script>