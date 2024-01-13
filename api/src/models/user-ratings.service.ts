import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserRates(userId: string) {
  return await prisma.rating.findMany({
   where: {
      userId: Number(userId)
    },
    // include: {
    //   User: true
    // }
  });
}

export async function create(userId: string, title: string, IGDBgameId: string) {
  return await prisma.rating.create({
    data: {
      title: title,
      userId: Number(userId),
      IGDBgameId: Number(IGDBgameId)
    }
  });
}

export async function update(id: string, body: any) {
  return await prisma.rating.update({
    where: {
      id: Number(id)
    },
    data: body,
  });
}

export async function deleteUserRate(id: string) {
  return await prisma.rating.delete({
    where: {
      id: Number(id)
    }
  })
}
