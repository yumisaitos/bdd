
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    const music = await prisma.music.findMany();
    console.log(music);
}

main();