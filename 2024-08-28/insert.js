//1
const onlineUsers = await prisma.usuario.findMany({
    where: {
      status: "online",
    },
  });

//2
  const specificUserName = "nomeDeUsuario"; // Substitua pelo nome de usuário desejado
const user = await prisma.usuario.findUnique({
  where: {
    userName: specificUserName,
  },
});

//3
const currentDate = new Date();
const oneMonthAgo = new Date(currentDate.setMonth(currentDate.getMonth() - 1));

const newUsers = await prisma.usuario.findMany({
  where: {
    createdAt: {
      gte: oneMonthAgo,
    },
  },
});

//4
const now = new Date();
const currentMonth = now.getMonth(); 
const startOfMonth = new Date(now.getFullYear(), currentMonth, 1);
const endOfMonth = new Date(now.getFullYear(), currentMonth + 1, 0);

const usersWithBirthdayThisMonth = await prisma.usuario.findMany({
  where: {
    birthDate: {
      gte: startOfMonth,
      lte: endOfMonth,
    },
  },
});


//5
const usersInSaoPaulo = await prisma.usuario.findMany({
  where: {
    city: "São Paulo",
  },
});

//6
const southeastRegionUsers = await prisma.usuario.findMany({
  where: {
    region: {
      in: ["Rio de Janeiro", "São Paulo", "Minas Gerais", "Espírito Santo"],
    },
  },
});


//7
const usersWithPhone = await prisma.usuario.findMany({
  where: {
    phone: {
      not: null,
    },
  },
});


//8
const usersWithoutAvatar = await prisma.usuario.findMany({
  where: {
    avatar: {
      equals: null,
    },
  },
});

//9
const hobbyKeyword = "futebol";

const usersWithSpecificBio = await prisma.usuario.findMany({
  where: {
    bio: {
      contains: hobbyKeyword,
      mode: "insensitive", 
    },
  },
});
