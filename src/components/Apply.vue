<template>
    <section class="apply__block--wrapper bg-white" :class="extraclass">
        <div class="container">
            <div class="apply__block text-center">
                <h2 v-html="headline" v-if="headline"></h2>
                <div class="blurb font-weight-light mt-3" v-if="blurb" v-html="blurb"></div>
                <form-block 
                    formcolor="light"
                    :formname="formname"
                    formaction="success"
                    bgcolor="bg-white"
                    thankyoumessage="<strong>Thank you for applying!</strong> <br>We are delighted that you want to join our team! Let us read your message and then get back to you asap 🕺🏻"
                    extramessage="While waiting for our response - why don't get more fimiliar with who we are?"
                    :extrabtn="{
                        link: '/about/',
                        label: 'Get to know us'
                    }"
                    submitlabel='Send your application'
                    :fields="[
                        {
                            input:'input',
                            name:'email',
                            type:'email',
                            placeholder:'Your email address *',
                            required:true
                        },
                        {
                            input:'input',
                            name:'name',
                            type:'text',
                            placeholder:'Your name *',
                            required:true
                        },
                        {
                            input:'input',
                            name:'phone',
                            type:'text',
                            placeholder:'Your phone number *',
                            required:true
                        },
                        {
                            input:'textarea',
                            name:'message',
                            type:'textarea',
                            placeholder:'Tell us about yourself!',
                            required:false
                        },
                        {
                            input:'file',
                            name:'resume',
                            type:'file',
                            placeholder:'Upload resume',
                            required:false
                        }
                    ]"
                />
            </div>
        </div>
    </section>
</template>

<script>
import FormBlock from '~/components/FormBlock.vue'

export default {
    props:['headline', 'blurb', 'extraclass', 'formname'],
    components:{
        FormBlock
    }
}
</script>