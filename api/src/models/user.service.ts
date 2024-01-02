import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class UserService {
  async all() {
    return await prisma.users.findMany()  
  }
}

export default new UserService()