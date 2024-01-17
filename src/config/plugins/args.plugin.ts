import yargs, { options } from 'yargs';

import {hideBin} from 'yargs/helpers';

export const yarg = yargs(process.argv)
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:''
    })
    .option('l',{
        alias:'limit',
        type:'number',
        default:10,
        describe:'limit table'
    })
    .option('s',{
        alias:'show',
        type:'boolean',
        default:false,
        describe:'show table'
    })
    .option('n',{
        alias:'name',
        type:'string',
        default:'multiplication-table',
        describe:'file name '
    })
    .option('d',{
        alias:'destination',
        type:'string',
        default:'outputs',
        describe:'file  destination'
    })
    .check((argv,options)=>{
        if(argv.b<1) throw 'Error: base debe ser mayor a 0'
        return true
    })

    .parseSync()

