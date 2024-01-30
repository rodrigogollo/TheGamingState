import { IUser } from './user.interface'

export interface IProfile { 
	id: number;
	name: string;
	gender: string;
	age: number;
	userId: number;
	user: IUser;
}

