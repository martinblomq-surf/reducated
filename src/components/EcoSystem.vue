<template>
    <section class="ecosystem__block--wrapper" :class="extraclass">
        <div class="container">
            <h2 v-html="headline" class="text-center"></h2>
            <div class="mx-auto md:w-2/3 text-center" v-if="blurb" v-html="blurb"></div>
            <div class="flex md:flex-row-reverse md:justify-center md:items-center">
                <div class="w-5/12">
                    <div class="ecosystem__block">
                        <g-image src="~/assets/img/reducated-ecosystem.png" />
                        <!-- require(`!!assets-loader!~/assets/img/${image}`) -->
                    </div>
                </div>
                <div class="md:w-5/12 md:pr-24">
                    <div class="md:py-24">
                        <h4>{{ text.headline }}</h4>
                        <div v-html="text.body"></div>
                        <div class="mt-4">
                            <div v-for="(description, i) in text.descriptions" :key="i" class="mb-4">
                                <div class="p-4 rounded-md bg-gradient-to-tr" :class="'from-'+description.color+'-100'">
                                    <div class="flex flex-row items-center">
                                        <div class="w-4 h-4 rounded-full mr-2" :class="'bg-'+description.color+'-500'"></div>
                                        <h5 :class="'text-'+description.color+'-500'">{{ description.title }}</h5>
                                    </div>
                                    <div class="leading-tight mt-2">
                                        {{ description.text }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn--wrapper text-center mt-4" v-if="btn">
                <primary-btn 
                    :title=btn.title
                    :link=btn.link
                    :color=btn.color
                />
            </div>
        </div>
    </section>
</template>
<script>
import PrimaryBtn from '~/components/buttons/Primary.vue'
import Logo from '~/components/Logo.vue'
export default {
    props:{
        'headline': String,
        'benefits': Array,
        'extraclass': String,
        'card':Boolean,
        'steps':Boolean,
        'blurb':String,
        'btn':Object,
        'image':String,
        'text':Object
    },
    computed: {
        setImage() {
            //return require("~/assets/images/" + this.image);
        }
    },
    components:{PrimaryBtn, Logo}
}
</script>