import { prisma } from "./prisma";

const main = async () => {
  await prisma.user.createMany({
    data: [{ name: "alice" }, { name: "bob" }],
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
