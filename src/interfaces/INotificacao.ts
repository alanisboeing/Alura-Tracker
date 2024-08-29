export enum TipoNotificacao{
    SUCESSO,
    FALHA,
    ALERTA
}

export interface INotificacao {
    titulo: string,
    texto: string,
    tipo: TipoNotificacao,
    id: number
}