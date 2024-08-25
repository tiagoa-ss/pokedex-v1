export interface Pokemon {
	abilities: any[];
	baseExperience: number;
	cries: any;
	forms: any[];
	gameIndices: any[];
	height: number;
	heldItems: any[];
	id: number;
	isDefault: boolean;
	locationAreaEncounters: string;
	moves: any[];
	name: string;
	order: number;
	pastAbilities: any[];
	pastTypes: any[];
	species: any;
	sprites: any;
	stats: any[];
	types: Type[];
	weight: number;
}

export interface Type {
	slot: number;
	type: { name: string; url: string };
}
