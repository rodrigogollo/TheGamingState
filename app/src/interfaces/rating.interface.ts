import { User } from './user.interface'

export interface Rating { 
	id: number;
	title: string;
	IGDBgameId: number;
	userId: number;
	author: User;
}
