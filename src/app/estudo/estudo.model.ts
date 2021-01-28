export class Estudo {
    editando: boolean
    
    constructor(
        public id: number,
        public titulo: string,
        public descricao: string
    ) {
        this.editando = false
    }
}