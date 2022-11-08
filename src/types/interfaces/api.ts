export interface ApiUser {
	id: string;
	name: string;
	email?: string;
	cpf?: string;
	password?: string;
	isAdmin?: boolean;
	profiles?: ApiProfiles[];
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ApiProfiles {
	id: string;
	title: string;
	imageUrl: string;
	userId: string;
	favorites?: ApiFavorites[];
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ApiGenres {
	id?: string;
	name: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ApiGames {
	id: string;
	title: string;
	image: string;
	description: string;
	year: string;
	score: string;
	trailer: string;
	gameplay: string;
	genres?: ApiGenres[];
	createdAt?: Date;
	updatedAt?: Date;
}

export interface ApiFavorites {
	id: string;
	createdAt?: Date;
	games: ApiGames[];
	profile?: ApiProfiles;
}
