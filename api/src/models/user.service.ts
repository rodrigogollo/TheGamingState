import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function all() {
  return await prisma.user.findMany();
}

export async function create(username: string, email: string) {
  return await prisma.user.create({
    data: {
      username: username,
      email: email
    }
  });
}

export async function update(id: string, body: any) {
  return await prisma.user.update({
    where: {
      id: Number(id)
    },
    data: body,
  });
}

export async function deleteUser(id: string) {
  return await prisma.user.delete({
    where: {
      id: Number(id)
    }
  })
}
