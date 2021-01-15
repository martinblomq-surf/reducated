<template>
    <footer class="footer--wrapper bg-primary-200 bg-opacity-10 pt-5 pb-5">
        <div class="container text-center">
            <div class="footer--logo mb-2 w-24 mx-auto">
                <logo />
            </div>
            <div class="font-normal text-sm">
                © {{ year }} Reducated Digital
            </div>
        </div>
    </footer>
</template>

<script>
    import Logo from '~/components/Logo.vue'
    export default{
        data(){
            return{
                year:2019
            }
        },
        mounted(){
            this.year = new Date().getFullYear();
        },
        components:{
            Logo
        }
    }
</script>