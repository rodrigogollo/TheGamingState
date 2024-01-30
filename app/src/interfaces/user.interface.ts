import { IProfile } from './profile.interface'
import { IRating } from './rating.interface'

export interface IUser {	
	id: number;
	email: string;
	username: string;
	profile: IProfile;
	ratings: IRating[]
}

