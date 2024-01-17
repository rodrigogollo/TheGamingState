import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserProfile(userId: string) {
  return await prisma.profile.findUnique({
   where: {
      userId: Number(userId),
    }
  });
}

export async function create(userId: string, name: string, gender: string, age: string) {
  return await prisma.profile.create({
    data: {
      userId: Number(userId),
      name: name,
      gender: gender,
      age: Number(age)
    }
  });
}

export async function update(userId: string, body: any) {
  return await prisma.profile.update({
    where: {
      userId: Number(userId)
    },
    data: body,
  });
}
