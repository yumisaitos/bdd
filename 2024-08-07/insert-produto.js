const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const data = {
        name: 'Red' ,
        description: 'pop','rock pop','country' ,
        price: 'Yes' ,
        assesment: new Date("2012-10-22"),
        login: new Date('3:41')
    };
    await prisma.Produto.create({ data });
    console.log("Cadastro realizado com sucesso!");
}

main();