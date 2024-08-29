<template>
  <main :class="{'columns is-gapless is-multiline':true, 'modo-escuro': ativo}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <Notificacoes/>
      <RouterView></RouterView>
    </div>
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';


export default defineComponent({
    name: "App",
    components: { BarraLateral, Notificacoes },
    data(){
      return{
        ativo: false
      };
    },
    methods:{
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
