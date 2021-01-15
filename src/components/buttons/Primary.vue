<template>
    <g-link class="inline-flex items-center text-sm px-8 py-3 rounded-md font-semibold bg-gradient-to-tl border-4 text-white hover:px-12 hover:py-3 hover:bg-gradient-to-tr" :class="'from-'+btncolor+'-500 to-'+btncolor+'-300 border-'+btncolor+'-200 bg-'+btncolor+'-500 hover:bg-'+btncolor+'-100 hover:from-'+btncolor+'-200 hover:to-'+btncolor+'-400 hover:text-white hover:border-'+btncolor+'-100'" :to="link">{{ title }} <span class="arrow-right"></span></g-link>
</template>
<script>
export default {
    props:{
        link:String,
        title:String,
        blue:Boolean,
        color:String
    },
    data(){
        return{
            btncolor:'orange'
        }
    },
    mounted(){
        if(this.color && this.color.length > 0){
            this.btncolor = this.color;
        }
    }
}
</script>