import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserService {
  async all() {
    return await prisma.users.findMany()  
  }

  async create(first_name: string, last_name: string, email: string) {
    return await prisma.users.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email
      }
    });
  }

  async update(id: string, body: any) {
    return await prisma.users.update({
      where: {
        id: Number(id)
      },
      data: body,
    });
  }

  async delete(id: string) {
    return await prisma.users.delete({
      where: {
        id: Number(id)
      }
    })
  }
}

export default new UserService()