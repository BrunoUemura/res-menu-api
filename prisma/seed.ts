import crypto from 'crypto';
import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { menu } from './seeders/menu';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: {
      id: crypto.randomUUID(),
      username: 'admin',
      password: await bcrypt.hash('admin', 10),
    },
  });

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
