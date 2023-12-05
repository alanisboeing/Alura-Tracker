<template>
    <div class="box has-text-weight-bold">
        <slot></slot> 
        <!-- o slot significa que o que for inserido dentro da tag da box sera renderizado aqui -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'boxVazia'
})
</script>
<style scoped>
.box{
    background-color: #F0F0CA;
}
</style>