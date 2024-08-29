
<template>
    <section>
        <form @submit.prevent="salvar()" class="form">
            <div class="field">
                <label for="nomeProjeto" class="label">
                    Nome do projeto
                </label>
                <input type="text" class="input" v-model="nomeProjeto" id="nomeProjeto" placeholder="Meu Projeto" />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store';
import { ADICIONA_PROJETO, ALTERA_PROJETO } from "@/store/mutacoes";
import { TipoNotificacao } from '@/interfaces/INotificacao';
import { notificacaoMixin } from '@/mixins/notificar';
import useNotificador from '@/hooks/notificador';
export default defineComponent({
    name : 'FormularioProjetos',
    props: {
        id: { type: String }
    },
    // mixins: [notificacaoMixin],
    mounted () {
        if(this.id){
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id);
            this.nomeProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeProjeto: '',
        }
    },
    methods: {
        salvar() {
            if(this.id){
                this.store.commit(ALTERA_PROJETO, {
                    id: this.id,
                    nome: this.nomeProjeto
                })
            }else{
                this.store.commit(ADICIONA_PROJETO, this.nomeProjeto)
            }
            this.nomeProjeto = '';
            this.notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'Projeto cadastrado com sucesso!')
            this.$router.push('/projetos')
        },
    },
    setup() {
        const store = useStore();
        const { notificar } = useNotificador()
        return {
            store,
            notificar
        }
    }
})

</script>

