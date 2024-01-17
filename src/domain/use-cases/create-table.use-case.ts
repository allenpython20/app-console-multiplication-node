export interface CreateTableUserCase{
    execute: (options:CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base:number;
    limit?:number
}


export class CreateTable implements CreateTableUserCase{

    constructor(){

    }

    execute({base,limit=10}:CreateTableOptions){

        let contenido = '';

        for (let index = 1; index <= limit; index++) {
            const op = `${base} x ${index} = ${base*index} \n`;
          
            contenido += op;
        }

        return contenido;
        
    }

}