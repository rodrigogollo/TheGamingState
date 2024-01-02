import UserService from '../models/user.service'

export const getUsers = async (req:any, res:any) => {  
  const users = await UserService.all()
  res.json(users)
}