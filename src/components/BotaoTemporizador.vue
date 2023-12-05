<template>
    <button class="button">
        <span class="icon">
            <i :class="{'fas': true, 'fa-play': play, 'fa-stop': stop}" ></i>
        </span>
        <span>{{ textoSpan }}</span>
    </button>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        textoSpan: { type: String, required: true },
        play: { type: Boolean, required: true  },
        stop: { type: Boolean, required: true },
    },
})
</script>