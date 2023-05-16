import { prisma } from "./prisma";

const main = async () => {
  await prisma.user.upsert({
    create: {
      id: 5,
      name: "Alice",
    },
    update: {},
    where: { id: 5 },
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
