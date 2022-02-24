import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const menuRepository = prisma.menu;

export default menuRepository;
