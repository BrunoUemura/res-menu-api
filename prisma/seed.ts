import { PrismaClient } from '@prisma/client';
import { menu } from './seeders/menu';

const prisma = new PrismaClient();

async function main() {
  await prisma.menu.createMany({
    data: menu,
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
