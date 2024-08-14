const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
const data = [

{
name: 'O Jogo de Amor e Ódio',
description: 'Sally Thorne surge na cena literária apresentando um ambiente de trabalho hilário e sensual em uma comédia sobre aquela conhecida linhazinha tênue entre o amor e o ódio.',
price: 41.61,
assessment: 4.6,
dateRegister: new Date('2010-02-12T10:40:34')
},
{
name: 'Uma Farsa de Amor na Espanha',
description: 'Em Uma farsa de amor na Espanha, acompanhamos a história de Lina Martín, uma jovem espanhola que morava em Nova York e precisava de um acompanhante para o casamento da irmã em sua cidade natal.',
price: 49.10,
assessment: 4.7,
dateRegister: new Date('2009-12-13T20:53:23')
},
{
name: 'Melhor do que nos filmes',
description: 'Sucesso no TikTok, livro de Lynn Painter vai conquistar os fãs de comédias românticas com uma protagonista determinada a encontrar seu “felizes para sempre”Elizabeth Buxbaum sempre soube que seu vizinho não seria um bom namorado.',
price: 44.92,
assessment: 4.4,
dateRegister: new Date('2003-04-23T09:43:23')
},
{
name: 'Amor, Teoricamente',
description: 'Dois físicos rivais colidem em meio a um turbilhão de disputas acadêmicas e caóticos namoros de mentira nesta nova comédia romântica da autora de A hipótese do amor.',
price: 49.10,
assessment: 4.8,
dateRegister: new Date('2007-02-28T08:36:43') // Data corrigida
},
{
name: 'Corte de Espinhos e Rosas',
description: 'Uma das séries de fantasia mais aclamadas de todos os tempos, pela primeira vez com todos os livros da saga reunidos em um Box exclusivo. Os livros da série Corte de Espinhos e Rosas já venderam mais de 1 milhão de exemplares no Brasil, e continuam a arrebatar o coração de leitores apaixonados.',
price: 34.05,
assessment: 4.2,
dateRegister: new Date('2015-03-15T15:20:39')
}

];

await prisma.product.createMany({ data })
console.log("Cadastro realizado com sucesso!");
}

main();