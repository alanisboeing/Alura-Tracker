<template>
  <main :class="{'columns is-gapless is-multiline':true, 'modo-escuro': ativo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @AoSalvarTarefa="salvarTarefa"/>
      <div class="list">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" :tarefas="tarefas"  />
        <Box v-if="tarefas.length < 1">
          Você não está muito produtivo hoje :(
        </Box>
      </div>
    </div>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefa';
import Box from './components/Box.vue';

export default defineComponent({
    name: "App",
    components: { BarraLateral, Formulario, Tarefa, Box },
    data(){
      return{
        tarefas: [] as ITarefa[],
        ativo: false
      };
    },
    methods:{
      salvarTarefa(tarefa: ITarefa){
        this.tarefas.push(tarefa);
      },
      trocarTema(ativoDesativo: boolean){
        return this.ativo = ativoDesativo
      }
    }
});
</script>

<style>
.list{
    padding: 1.25rem;
}
main{
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo{
  background-color: var(--bg-primario);
}
</style>
