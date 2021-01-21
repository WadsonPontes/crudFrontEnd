export class Estudo {
    titulo_final: string
    descricao_final: string
    editando: boolean


    constructor(
        public id: number,
        public titulo: string,
        public descricao: string
    ) {
        this.titulo_final = titulo
        this.descricao_final = descricao
        this.editando = false
    }
}