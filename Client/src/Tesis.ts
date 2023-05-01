export class Tesis{
    public id!: number;
    public autor!: string
    public autorWork!: string
    public co_autor!: string
    public head!: string
    public body!: string
    public autorEmail!: string

    constructor(head :string, body: string, autor: string, co_autor = ' ', id = 0){
        this.head = head
        this.body = body
        this.autor = autor
        this.co_autor = co_autor
        this.id = id
    }
}