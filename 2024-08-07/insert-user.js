const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
const data = [

{ name: 'Fulano', 
user: 'fulano', 
email: 'fulano@gmail.com', 
type: 'Admin', 
dateBorn:new Date('2002-04-02T00:02:36Z'),
dateRegister: new Date('2010-02-12T10:40:34')  
},
{ name: 'Beltrano', 
user: 'beltrano01', 
email: 'beltrano10@gmail.com', 
type: 'Usuario', 
dateBorn: new Date('2001-01-20T00:02:21Z'),
dateRegister:  new Date('2015-03-15T15:20:39') 
},
{ name: 'Ciclano', 
user: 'ciclano3', 
email: 'ciclano3@gmail.com', 
type: 'Usuario', 
dateBorn:new Date('2005-11-10T00:03:39Z'),
dateRegister: new Date('2009-12-13T20:53:23') 
},
{ name: 'Ana Maria', 
user: 'anamaria', 
email: 'anamaria@gmail.com', 
type: 'Usuario', 
dateBorn: '1997-07-21T00:03:41Z', 
dateRegister:new Date('2003-04-23T09:43:23') ,
},
{ name: 'Matheus', 
user: 'matheus', 
email: 'matheus2@gmail.com', 
type: 'Usuario', 
dateBorn: new Date('2001-01-20T00:03:39Z'),
dateRegister: new Date('2007-02-28T08:36:43')
}];

await prisma.user.createMany({ data })
console.log("Cadastro realizado com sucesso!");
}

main();