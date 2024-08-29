<template>
    <div class="projetos">
        <h1 class="title">Projetos</h1>
        <RouterView></RouterView>
    </div>
</template>
<script lang="ts">

    import { RouterView } from 'vue-router';
    import {defineComponent} from 'vue';
    export default defineComponent({
        name: 'ProjetosTracker'
    })
</script>

<style scoped>
.projetos {
    padding: 1em;
}
</style>