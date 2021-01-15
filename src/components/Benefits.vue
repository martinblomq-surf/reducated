<template>
    <section class="benefits__block--wrapper" :class="extraclass">
        <div class="container">
            <h2 v-html="headline" class="text-center"></h2>
            <div class="mx-auto md:w-2/3 text-center" v-if="blurb" v-html="blurb"></div>
            <div class="flex flex-row md:flex-wrap benefits__block--row mt-3 md:mt-10">
                <div class="md:px-4 md:w-3/12 w-full mb-3 md:mb-4 flex" v-for="(benefit, index) in $static.feature.edges" :key="index">
                    <div class="w-full h-full rounded-md py-6 px-4 md:px-6 md:py-8 bg-gradient-to-t from-blue-50">
                        <div class="h-full">
                            <div v-if="benefit.node.icon">
                                <div class="rounded-md w-16 h-16 p-4 mx-auto mb-4 flex justify-center items-center" :class="benefit.node.iconcolor && benefit.node.iconcolor.length > 0 ? benefit.node.iconcolor : 'bg-blue-100 text-blue-300 bg-opacity-50'" v-html="benefit.node.icon"></div>
                            </div>
                            <div class="benefits__block--inner text-center">
                                <h3 class="member--name text-lg md:text-xl font-bold mb-2 md:mb-4">{{ benefit.node.title }}</h3>
                                <div class="description" v-html="benefit.node.description"></div>
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
<static-query>
query Features {
  feature: allFeatures(sortBy: "index", order: ASC) {
    edges {
      node { 
        index
        id
        title
        description
        icon
        iconcolor
      }
    }
  }
}
</static-query>
<script>
import PrimaryBtn from '~/components/buttons/Primary.vue'
export default {
    props:{
        'headline': String,
        'benefits': Array,
        'extraclass': String,
        'card':Boolean,
        'steps':Boolean,
        'blurb':String,
        'btn':Object
    },
    components:{PrimaryBtn}
}
</script>