export interface IGame {
	id: number;
	name: string;
	summary: string;
	cover: {
		id: number;
		url: string;
	}
	screenshots: [{
		id: number;
		game: number;
		height: number;
		image_id: string;
		url:string;
		width: number;
	}]
} 
