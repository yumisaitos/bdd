// insert-user.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findMany();
    console.log(users);
}

main();