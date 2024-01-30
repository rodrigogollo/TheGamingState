import { IUser } from './user.interface'

export interface IRating { 
	id: number;
	title: string;
	IGDBgameId: number;
	userId: number;
	author: IUser;
}
