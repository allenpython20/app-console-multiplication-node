import { yarg } from "./config/plugins/args.plugin";

const fs = require('fs');

const base = yarg.b;
const limit = yarg.l;

let contenido:string = '';

for (let index = 1; index <= limit; index++) {
    const op = `${base} x ${index} = ${base*index} \n`;
  
    contenido += op;
}

if(yarg.s){
    console.log(contenido)   
}


const outputPath = 'ouputs';

fs.mkdirSync(outputPath,{recursive:true})

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, contenido, (error:any) => {
    if (error) {
        console.error('Error al escribir en el archivo:', error);
    } else {
        console.log('El archivo se ha escrito correctamente.');
    }
});