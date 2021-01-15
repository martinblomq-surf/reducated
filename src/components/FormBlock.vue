<template>
    <div class="form-section form--wrapper mt-3 md:mt-12 relative" :class="'form-'+formcolor" v-if="!success">
        <div class="loading--wrapper" :class="bgcolor" v-if="loading">
            <div class="loading--icon"></div>
        </div>
        <form 
            :id="formname"
            class="form"
            :name="formname"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            novalidate
            enctype="multipart/form-data"
            @submit.prevent
            ref="theform"

            :action="formaction"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" :value="formname" />
            <p hidden><label>Don’t fill this out: <input name="bot-field" /></label></p>

            <div class="sender-info">
                <div class="mb-3" v-for="(field, index) in fields" :key="index">
                    <div class="mc-field-group form-icon" v-if="field.type != 'file'">
                        <div class="form-icon--inner" :class="'form-icon--inner--' + field.name">
                            <svg v-if="field.name == 'email'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M0,24.08v123.84h172v-123.84zM6.88,30.96h158.24v110.08h-158.24zM13.76,47.87781v8.11625l72.24,40.94406l72.24,-40.94406v-8.11625l-72.24,40.94406z"></path></g></g></svg>
                            <svg v-if="field.name == 'name'" version="1.1" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M68.37,1.3975c-16.07125,0.29563 -26.3375,6.78594 -30.745,16.8775c-4.20594,9.60781 -3.26531,21.74188 -0.215,34.2925c-1.63937,1.92156 -2.94281,4.50156 -2.4725,8.385c0.51063,4.23281 1.67969,7.24281 3.3325,9.3525c0.91375,1.15563 2.10969,1.26313 3.225,1.8275c0.60469,3.60125 1.6125,7.2025 3.1175,10.2125c0.86,1.73344 1.84094,3.3325 2.795,4.6225c0.43,0.57781 1.04813,0.91375 1.505,1.3975c0.02688,4.24625 0.04031,7.78031 -0.3225,12.255c-1.11531,2.70094 -3.72219,4.87781 -7.955,6.9875c-4.36719,2.17688 -10.05125,4.1925 -15.8025,6.665c-5.75125,2.4725 -11.66375,5.4825 -16.34,10.2125c-4.67625,4.73 -7.98187,11.22031 -8.4925,19.78l-0.215,3.655h86.215l-2.2575,-6.88h-76.0025c0.9675,-4.86437 2.78156,-8.77469 5.6975,-11.7175c3.66844,-3.70875 8.66719,-6.49031 14.0825,-8.815c5.41531,-2.32469 11.11281,-4.16562 16.125,-6.665c5.01219,-2.49937 9.64813,-5.79156 11.61,-11.0725l0.215,-0.86c0.52406,-5.76469 0.3225,-9.84969 0.3225,-14.835v-2.0425l-1.8275,-0.9675c0.30906,0.16125 -0.43,-0.30906 -1.075,-1.1825c-0.645,-0.87344 -1.43781,-2.12312 -2.15,-3.5475c-1.42437,-2.84875 -2.59344,-6.51719 -2.9025,-9.46l-0.3225,-2.795l-2.9025,-0.215c-0.02687,0 -0.34937,0.04031 -0.9675,-0.7525c-0.61812,-0.79281 -1.42437,-2.53969 -1.8275,-5.9125c-0.33594,-2.86219 1.11531,-3.85656 0.9675,-3.7625l2.2575,-1.3975l-0.645,-2.4725c-3.23844,-12.47 -3.80281,-23.79781 -0.43,-31.4975c3.35938,-7.67281 10.2125,-12.49687 24.51,-12.7925c0.04031,0 0.06719,0 0.1075,0c6.92031,0.02688 11.40844,2.05594 12.685,4.3l0.86,1.3975l1.6125,0.215c4.78375,0.67188 7.525,2.59344 9.46,5.2675c1.935,2.67406 3.01,6.40969 3.3325,10.535c0.645,8.25063 -1.73344,17.85844 -3.225,22.36l-0.86,2.6875l2.365,1.3975c-0.14781,-0.09406 1.31688,0.90031 0.9675,3.7625c-0.40312,3.37281 -1.20937,5.11969 -1.8275,5.9125c-0.61812,0.79281 -0.94062,0.7525 -0.9675,0.7525l-2.9025,0.215l-0.3225,2.795c-0.3225,2.96969 -1.51844,6.61125 -2.9025,9.46c-0.69875,1.42438 -1.41094,2.67406 -2.0425,3.5475c-0.63156,0.87344 -1.29,1.35719 -0.9675,1.1825l-1.8275,0.9675v2.0425c0,4.97188 -0.20156,9.07031 0.3225,14.835v0.43l0.215,0.43c1.10188,2.96969 3.03688,5.95281 6.235,7.8475l3.5475,-5.9125c-1.45125,-0.86 -2.40531,-2.33812 -3.1175,-4.085c-0.36281,-4.47469 -0.34937,-8.00875 -0.3225,-12.255c0.44344,-0.48375 1.08844,-0.81969 1.505,-1.3975c0.94063,-1.30344 1.84094,-2.9025 2.6875,-4.6225c1.46469,-3.01 2.52625,-6.62469 3.1175,-10.2125c1.075,-0.56437 2.23063,-0.69875 3.1175,-1.8275c1.65281,-2.10969 2.82188,-5.11969 3.3325,-9.3525c0.45688,-3.7625 -0.80625,-6.24844 -2.365,-8.17c1.67969,-5.45562 3.82969,-14.27062 3.1175,-23.3275c-0.38969,-4.945 -1.65281,-9.87656 -4.6225,-13.975c-2.71437,-3.7625 -7.12187,-6.50375 -12.685,-7.6325c-3.61469,-4.68969 -10.11844,-6.45 -17.63,-6.45zM130.72,89.44c-22.76312,0 -41.28,18.51688 -41.28,41.28c0,22.76313 18.51688,41.28 41.28,41.28c22.76313,0 41.28,-18.51687 41.28,-41.28c0,-22.76312 -18.51687,-41.28 -41.28,-41.28zM130.72,96.32c19.04094,0 34.4,15.35906 34.4,34.4c0,19.04094 -15.35906,34.4 -34.4,34.4c-19.04094,0 -34.4,-15.35906 -34.4,-34.4c0,-19.04094 15.35906,-34.4 34.4,-34.4zM147.3825,115.5625l-2.15,2.6875l-16.6625,21.285l-12.7925,-11.395l-2.58,-2.2575l-4.515,5.16l2.58,2.2575l15.48,13.76l2.6875,2.4725l2.2575,-2.9025l18.92,-24.08l2.15,-2.6875z"></path></g></g></svg>
                            <svg v-if="field.name == 'phone'" version="1.1" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M40.72906,10.27969c-2.64719,-0.215 -5.59,0.55094 -8.30438,2.45906c-2.39187,1.66625 -7.55187,5.76469 -12.37594,10.40063c-2.40531,2.31125 -4.70312,4.71656 -6.47687,7.08156c-1.78719,2.365 -3.34594,4.52844 -3.25188,7.67281c0.09406,2.82188 0.37625,11.16656 6.38281,23.95906c6.00656,12.77906 17.65687,30.315 40.37969,53.05125c22.73625,22.73625 40.27219,34.38656 53.05125,40.39312c12.77906,6.00656 21.13719,6.28875 23.95906,6.38281c3.13094,0.09406 5.29437,-1.46469 7.65937,-3.25187c2.365,-1.78719 4.77031,-4.07156 7.08156,-6.47688c4.6225,-4.82406 8.72094,-9.98406 10.38719,-12.37594c3.80281,-5.41531 3.17125,-11.81156 -1.06156,-14.78125c-2.66063,-1.86781 -27.13031,-18.15406 -30.81219,-20.41156c-3.73562,-2.28437 -8.03562,-1.24969 -11.87875,0.77938c-3.02344,1.59906 -11.20687,6.28875 -13.545,7.6325c-1.76031,-1.11531 -8.43875,-5.56313 -22.80344,-19.92781c-14.37812,-14.36469 -18.8125,-21.04313 -19.92781,-22.80344c1.34375,-2.33813 6.02,-10.48125 7.6325,-13.55844c2.01563,-3.82969 3.14438,-8.17 0.73906,-11.9325c-1.00781,-1.59906 -5.59,-8.57312 -10.2125,-15.57406c-4.63594,-7.00094 -9.03,-13.63906 -10.17219,-15.22469v-0.01344c-1.49156,-2.05594 -3.81625,-3.26531 -6.45,-3.48031zM40.0975,17.3075c0.94063,0.12094 1.505,0.49719 1.505,0.49719c0.55094,0.76594 5.375,7.99531 9.9975,14.98281c4.6225,7.00094 9.33906,14.17656 10.15875,15.48c0.13438,0.20156 0.3225,2.48594 -1.02125,5.02563v0.01344c-1.51844,2.88906 -8.6,15.265 -8.6,15.265l-0.98094,1.73344l1.00781,1.72c0,0 5.28094,8.90906 22.07781,25.70594c16.81031,16.79688 25.71938,22.09125 25.71938,22.09125l1.72,1.00781l1.73344,-0.98094c0,0 12.34906,-7.06813 15.265,-8.6c2.53969,-1.33031 4.82406,-1.15563 5.09281,-0.99438c2.37844,1.46469 28.81,19.0275 30.43594,20.16969c0.05375,0.04031 1.49156,2.21719 -0.60469,5.20031h-0.01344c-1.26313,1.81406 -5.40188,7.06813 -9.71531,11.55625c-2.16344,2.24406 -4.38063,4.34031 -6.26188,5.75125c-1.88125,1.41094 -3.56094,1.85438 -3.29219,1.86781c-2.92937,-0.09406 -9.39281,-0.16125 -21.25812,-5.73781c-11.86531,-5.56312 -28.79656,-16.70281 -51.11625,-39.03594c-22.30625,-22.30625 -33.44594,-39.2375 -39.0225,-51.11625c-5.56313,-11.86531 -5.63031,-18.32875 -5.72438,-21.24469c0.01344,0.26875 0.45688,-1.42438 1.86781,-3.30563c1.41094,-1.88125 3.49375,-4.11187 5.73781,-6.27531c4.50156,-4.31344 9.74219,-8.45219 11.55625,-9.71531v0.01344c1.49156,-1.04812 2.795,-1.1825 3.73562,-1.075z"></path></g></g></svg>
                            <svg v-if="field.name == 'message'" version="1.1" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M86,14.00188c-43.45687,0 -78.87812,30.44937 -78.87812,68.55812c0,22.11813 12.12062,41.37406 30.73156,53.965c-0.02687,0.73906 0.02688,1.935 -0.94062,5.53625c-1.20938,4.44781 -3.64156,10.72313 -8.57313,17.79125l-3.50719,5.02563h6.1275c21.23125,0 33.51313,-13.84063 35.42125,-16.05781c6.31563,1.47812 12.81938,2.29781 19.61875,2.29781c43.45688,0 78.87813,-30.44938 78.87813,-68.55813c0,-38.10875 -35.42125,-68.55812 -78.87813,-68.55812zM86,20.39813c40.48719,0 72.48188,28.03062 72.48188,62.16187c0,34.13125 -31.99469,62.16188 -72.48188,62.16188c-7.01437,0 -13.62562,-0.67188 -19.83375,-2.29781l-1.98875,-0.52406l-1.30344,1.59906c0,0 -9.93031,11.20687 -25.78656,13.90781c2.87563,-5.18688 4.99875,-10.02438 5.97969,-13.67938c1.38406,-5.09281 1.41094,-8.53281 1.41094,-8.53281v-1.76031l-1.47813,-0.94063c-18.1675,-11.55625 -29.48187,-29.44156 -29.48187,-49.93375c0,-34.13125 31.99469,-62.16187 72.48187,-62.16187zM51.6,75.68c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88zM86,75.68c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88zM120.4,75.68c-3.80281,0 -6.88,3.07719 -6.88,6.88c0,3.80281 3.07719,6.88 6.88,6.88c3.80281,0 6.88,-3.07719 6.88,-6.88c0,-3.80281 -3.07719,-6.88 -6.88,-6.88z"></path></g></g></svg>
                        </div>
                        <input v-if="field.input == 'input'" :type="field.type" :name="field.name" :class="[(field.name),(field.required ? 'required' : ''), (error && error.find(function(el){ return el.field === field.name }) !== undefined ? 'bg-red-200' : '')]" :id="field.name" :placeholder="field.placeholder" v-model="formData[field.name]" :required="field.required">
                        <textarea v-if="field.input == 'textarea'" :name="field.name" :id="field.name" :placeholder="field.placeholder" :class="[(field.name),(field.required ? 'required' : ''), (error && error.find(function(el){ return el.field === field.name }) !== undefined ? 'bg-red-200' : '')]" v-model="formData[field.name]" :required="field.required"></textarea>
                        <input v-if="field.input == 'hidden'" type="hidden" :name="field.name" :class="[(field.name),(field.required ? 'required' : ''), (error && error.find(function(el){ return el.field === field.name }) !== undefined ? 'bg-red-200' : '')]" :id="field.name" :value="setHiddenVal(field.name, field.value)"  :required="field.required">
                        <div class="absolute right-4 h-8 flex items-center top-1/2 -mt-4 text-sm text-red-500 leading-tight font-bold" :class="(error && error.find(function(el){ return el.field === field.name }) !== undefined ? '' : 'hidden')">
                            This field is required
                        </div>
                    </div>
                    <div class="file--dropzone--outer" v-else>
                        <div class="file--dropzone relative">
                            <label for="files" class="block font-bold p-3 file--dropzone__block" :class="fileName.length > 0 ? 'file--dropzone--success' : ''">
                                <span class="file--dropzone--icon">
                                    <div class="filed--dropzone--icon--success" v-if="fileName.length > 0"></div>
                                    <div class="filed--dropzone--icon--default" v-else>
                                        <svg class="block mx-auto" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 172 172"><g><path d="M99.76,15.5875c-17.93906,0 -33.12344,10.73656 -40.42,25.9075c-3.88344,-2.67406 -8.385,-4.6225 -13.4375,-4.6225c-12.81937,0 -23.04531,10.14531 -23.7575,22.79c-12.81937,4.6225 -22.145,16.58188 -22.145,30.96c0,18.32875 14.88875,33.2175 33.2175,33.2175h28.7025c1.23625,0.01344 2.39188,-0.63156 3.02344,-1.70656c0.61813,-1.075 0.61813,-2.39187 0,-3.46687c-0.63156,-1.075 -1.78719,-1.72 -3.02344,-1.70656h-28.7025c-14.62,0 -26.3375,-11.73094 -26.3375,-26.3375c0,-12.16094 8.19688,-22.40031 19.35,-25.4775c1.51844,-0.44344 2.53969,-1.86781 2.4725,-3.44c-0.01344,-0.48375 0,-0.72562 0,-0.7525c0,-9.55406 7.64594,-17.2 17.2,-17.2c4.78375,0 9.1375,1.92156 12.255,5.0525c0.81969,0.79281 1.98875,1.14219 3.10406,0.90031c1.12875,-0.24188 2.05594,-1.02125 2.48594,-2.08281c5.41531,-14.62 19.47094,-25.155 36.0125,-25.155c21.23125,0 38.3775,17.15969 38.3775,38.3775c0,1.57219 -0.12094,3.1175 -0.3225,4.73c-0.12094,0.9675 0.17469,1.935 0.80625,2.67406c0.63156,0.73906 1.55875,1.16906 2.52625,1.19594h0.215c13.15531,0 23.7575,10.60219 23.7575,23.7575c0,13.15531 -10.60219,23.7575 -23.7575,23.7575h-31.2825c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656h31.2825c16.8775,0 30.6375,-13.76 30.6375,-30.6375c0,-15.65469 -12.01312,-28.09781 -27.1975,-29.885c0.05375,-0.83312 0.215,-1.6125 0.215,-2.4725c0,-24.94 -20.3175,-45.2575 -45.2575,-45.2575zM86,74.2825l-2.4725,2.365l-17.2,17.2c-1.37062,1.37063 -1.37062,3.57438 0,4.945c1.37063,1.37063 3.57438,1.37063 4.945,0l11.2875,-11.2875v60.415c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-60.415l11.2875,11.2875c1.37063,1.37063 3.57438,1.37063 4.945,0c1.37063,-1.37062 1.37063,-3.57437 0,-4.945l-17.2,-17.2z"></path></g></svg>
                                    </div>
                                </span>
                                <span class="block text-xl mb-0">{{ field.placeholder }}</span>
                                <span class="block mb-0" v-if="fileName.length < 1">Drag & drop file here to upload</span>
                                <span class="block font-light mt-1 mb-2" v-if="fileName.length < 1">or</span>
                                <span class="p-2 font-bold underline text-primary-300" v-if="fileName.length < 1">Browse files</span>
                                <div v-if="fileName.length > 0">
                                    <span class="font-italic mt-2 font-light block">
                                        {{ fileName }}
                                    </span>
                                </div>
                                <input
                                    id="files"
                                    type="file"
                                    name="files"
                                    @change="processFile($event)"
                                />
                            </label>
                            <div class="remove flex flex-row justify-center items-center pt-2" v-if="fileName.length > 0" @click="deleteFile()">
                                <span class="delete--icon mr-2"></span>Delete file
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small mb-4">By submitting you accept our <a href="/terms" target="_blank">Terms of Service</a>. If you do not agree, you cannot proceed.</div>
            <div class="error bg-red-500 py-2 text-white mb-3 text-sm" v-if="hasError">
                Oops something went wrong.
            </div>
            <button type="submit" @click="handleSubmit" class="inline-flex items-center text-sm px-8 py-3 rounded-full font-semibold bg-primary-400 text-white hover:bg-primary-400 hover:bg-opacity-10 hover:text-primary-400 hover:px-12 hover:py-3">{{ submitlabel }} <span class="arrow-right"></span></button>
        </form>
    </div>
    <div v-else>
        <div class="text-sm mt-4 success--wrapper flex flex-row justify-center items-center">
            <div class="success--check mr-2 md:mr-3"></div>
            <span class="text-left" v-html="thankyoumessage"></span>
        </div>
        <p class="mt-4 mb-0 text-sm">{{ extramessage }}</p>
        <g-link class="btn btn-primary mt-3 inline-flex flex-row items-center" :to="extrabtn.link">{{ extrabtn.label }} <span class="arrow-right"></span></g-link>
    </div>
</template>

<script>
export default {
    props:{
        'formcolor':String,
        'formname':String,
        'formaction':String, 
        'bgcolor':String,
        'thankyoumessage':String,
        'extramessage':String,
        'extrabtn':Object,
        'fields':Array,
        'submitlabel':String
    },
    data() {
        return {
            formData: {},
            success:false,
            error:[],
            hasError:false,
            loading:false,
            fileName:''
        }
    },
    computed:{
        
    },
    methods:{
        setHiddenVal(name, value){
            this.formData[name] = value;
            return;
        },
        processFile(event) {
            //var theFile = event.target.files[0];
            //this.formData.file = theFile;
            //this.formData.file = event.target.files;
            this.formData.files = event.target.files;
            this.fileName = event.target.files[0].name;
        },
        deleteFile(){
            this.formData.files = '';
            this.fileName = '';
        },
        encode(data) {
            const formData = new FormData();
            for (const key of Object.keys(data)) {
                if (key === "files") {
                    formData.append(key, data[key][0]);
                } else {
                    formData.append(key, data[key]);
                }
            }
            return formData;
        },
        /*
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')

            // application/x-www-form-urlencoded
            // multipart/form-data
        },
        */
        handleSubmit(e) {

            this.loading = true;
            
            // check if required is filled
            let elms = this.$refs.theform.elements;
            let errors = 0;
            let errorMsg = [];
            for(var i=0, elem; elem = elms[i++];){
                if(elem.hasAttribute('required') && elem.value === ""){
                    errors += 1;
                    errorMsg.push({field:elem.name, msg:'The '+elem.name+' field is required'})
                }
            };
            if (errors > 0){
                this.loading = false;
                this.hasError = true;
                this.error = errorMsg;
                return
            }


            fetch('/', {
                method: "POST",
                body: this.encode({
                    "form-name": e.target.getAttribute("name"),
                    ...this.formData
                })
            })
            .then(() => {
                this.loading = false;
                this.success = true;
            })
            .catch((error) => {
                this.loading = false;
                console.log(error);
                this.hasError=true;
                //this.error = error;
            })
        }
    }
}
</script>