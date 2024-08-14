const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = [{
        name: 'RED' ,
        singer: 'Taylor Swift' ,
        album: 'Red' ,
        gender: 'pop',
        single: true ,
        lancamento: 2012,
        duracao: new Date("2012-08-22T00:03:41Z").toISOString(),
    },

    {
        name: 'Alone Again' ,
        singer: 'The Weeknd' ,
        album: 'After Hours' ,
        gender: 'pop',
        single: true ,
        lancamento: 2020,
        duracao: new Date("2020-03-22T00:03:41Z").toISOString(),
    },

    {
        name: 'World Hold On' ,
        singer: 'Bob Sinclar' ,
        album: 'After Hours' ,
        gender: 'eletrônica',
        single: true ,
        lancamento: 2006,
        duracao: new Date("2006-06-06T00:03:39Z").toISOString(),

       },

       {
        name: 'O Show Tem Que Continuar' ,
        singer: 'Airlindo Cruz' ,
        album: 'Fundo de Quintal' ,
        gender: 'MPB',
        single: false ,
        lancamento:1988,
        duracao: new Date("1988-07-04T00:02:36Z").toISOString(),
       }, 

       {
        name: 'Sem Querer' ,
        singer: 'Anitta' ,
        album: 'Show das Poderosas' ,
        gender: 'Pop',
        single: true ,
        lancamento: 2014,
        duracao: new Date("2014-11-01T00:02:21Z").toISOString(),
       }

];
    await prisma.music.createMany({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();