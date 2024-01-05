import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function all() {
  return await prisma.users.findMany();
}

export async function create(first_name: string, last_name: string, email: string) {
  return await prisma.users.create({
    data: {
      first_name: first_name,
      last_name: last_name,
      email: email
    }
  });
}

export async function update(id: string, body: any) {
  return await prisma.users.update({
    where: {
      id: Number(id)
    },
    data: body,
  });
}

export async function deleteUser(id: string) {
  return await prisma.users.delete({
    where: {
      id: Number(id)
    }
  })
}
