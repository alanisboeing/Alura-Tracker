<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '@/interfaces/ITarefa';
import Box from './Box.vue';
export default defineComponent({
    name: 'MinhasTarefas',
    components: { Cronometro, Box },
    props: {
        tempo: {type: Object as PropType<ITarefa>, required: true},
        tarefa: {type: Object as PropType<ITarefa>, required: true},
        tarefas: {type: [] as PropType<ITarefa[]>, required: true}
    }
})
</script>


