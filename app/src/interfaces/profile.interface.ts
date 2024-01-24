import { User } from './user.interface'

export interface Profile { 
	id: number;
	name: string;
	gender: string;
	age: number;
	userId: number;
	user: User;
}

