<template>
    <section class="quote__block--outer" :class="extraclass">
        <div class="container">
            <div class="flex md:flex-row-reverse md:items-stretch">
                <div class="md:w-1/2 md:border-l md:pl-8 flex items-center">
                    <div>
                        <h2>{{ headline }}</h2>
                        <div class="blurb" v-if="blurb" v-html="blurb"></div>
                        <div v-if="logos" class="flex flex-row items-center space-x-4 mt-4 md:mt-6">
                            <div v-for="(logo, i) in logos" :key="i" class="text-blue-900 text-opacity-50 opacity-60" :style="{filter: 'grayscale(1)'}" v-html="logo.svg"></div>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 md:pr-8 md:py-40 relative">
                    <blockquote class="py-3 md:pl-24">
                        <div class="leading-tight text-xl md:text-2xl italic mb-2" v-html="quote"></div>
                        <footer>
                            <span class="quote-by font-bold text-orange-200">- {{ byname }}</span>
                        </footer>
                    </blockquote>
                    <div class="text-orange-100 text-opacity-30 absolute top-0 left-0 w-full h-full -z-1">
                        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="overflow-visible w-full h-full fill-current" preserveAspectRatio="xMinYMin meet">
                            <path d="M42.7,-48.4C57.7,-38.4,73.7,-27.1,75.8,-13.5C78,0,66.4,15.8,54.8,27.7C43.3,39.7,31.8,47.7,18.8,53C5.8,58.3,-8.6,60.9,-24.1,58.6C-39.6,56.3,-56.1,49.1,-66.7,36C-77.3,22.8,-82,3.8,-73.3,-7.2C-64.6,-18.3,-42.4,-21.2,-28,-31.3C-13.5,-41.4,-6.8,-58.5,3.6,-62.8C13.9,-67,27.8,-58.4,42.7,-48.4Z" transform="translate(60 60)" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        'extraclass':String, 
        'bgcolor':String, 
        'headline':String,
        'blurb':String,
        'quote':String,
        'byname':String,
        'logos':Array
    }
}
</script>