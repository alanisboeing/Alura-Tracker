<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTemporizador id="botao-inicia" :disabled="cronometroHabilitado" 
            @click="iniciar" :stop="false" :play="true" :textoSpan="'play'"
        />
        <BotaoTemporizador id="botao-finaliza" :disabled="!cronometroHabilitado" 
            @click="finalizar" :stop="true" :play="false" :textoSpan="'stop'"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';
export default defineComponent({
    name: 'TemporizadorFormulario',
    components: { Cronometro, BotaoTemporizador },
    emits: ['temporizador-desligado'],
    data() {
        //data define o estado incial
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroHabilitado: false,
        };
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
            this.cronometroHabilitado = true;
        },
        finalizar() {
            clearInterval(this.cronometro);
            this.cronometroHabilitado = false;
            this.$emit('temporizador-desligado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    },
    
})
</script>