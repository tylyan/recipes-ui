export interface Recipe {
	id: string,
	name: string,
	creationDate: Date,
	lastModified: Date,
	tags: string[],
	ingredients: string[],
	steps: string[],
	notes: string[]
}