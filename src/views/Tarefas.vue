<template>
    <Formulario @AoSalvarTarefa="salvarTarefa" />
    <div class="list">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" :tarefas="tarefas" />
        <Box v-if="semTarefas">
            Você não está muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from '../components/Box.vue';

export default defineComponent({
    name: "App",
    components: { Formulario, Tarefa, Box },
    data() {
        return {
            tarefas: [] as ITarefa[],
        };
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) : void {
            this.tarefas.push(tarefa);
        },
    },
    computed: {
        semTarefas () :boolean {
            return this.tarefas.length == 0
        }
    }
});
</script>
  
<style>
.list {
    padding: 1.25rem;
}
</style>
  