<template>
    <Box>
        <div class="columns">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '@/interfaces/ITarefa';
import Box from './Box.vue';
export default defineComponent({
    name: 'MinhasTarefas',
    components: { Cronometro, Box },
    props: {
        tarefa: {type: Object as PropType<ITarefa>, required: true},
    },
    computed: {
        tempoGasto () : string {
        return new Date(this.tarefa.duracaoEmSegundos * 1000)
            .toISOString()
            .substr(11, 8)
        }
    }
})
</script>


