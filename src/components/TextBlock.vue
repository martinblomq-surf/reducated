<template>
    <section :class="extraclass">
        <div class="container container-text">
            <h2 class="mb-3 md:mb-10" :class="left ? 'text-left' : 'text-center'" v-html="headline" v-if="headline"></h2>
            <article class="text__block" v-html="text"></article>
        </div>
    </section>
</template>

<script>
export default {
    props:{'headline':String, 'text':String, 'extraclass':String, 'left':Boolean}
}
</script>