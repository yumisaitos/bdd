const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = [{
        name: 'RED' ,
        singer: 'Taylor Swift' ,
        name: 'Ciclano' ,
        album: 'Red' ,
        gender: 'pop','rock pop','country' ,
        single: 'Yes' ,
        lancamento: new Date("2012-10-22"),
        duracao: new Date('3:41')
    },

    {
        name: 'RED' ,
        singer: 'Taylor Swift' ,
        name: 'Ciclano' ,
        album: 'Red' ,
        gender: 'pop','rock pop','country' ,
        single: 'Yes' ,
        lancamento: new Date("2012-10-22"),
        duracao: new Date('3:41')
    }];
    await prisma.music.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();