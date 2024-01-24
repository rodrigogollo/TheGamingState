import { Profile } from './profile.interface'
import { Rating } from './rating.interface'

export interface User {	
	id: number;
	email: string;
	username: string;
	profile: Profile;
	ratings: Rating[]
}

