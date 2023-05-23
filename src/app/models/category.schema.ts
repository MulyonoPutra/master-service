import { Schema, model } from 'mongoose';
import { Category } from '../domain/category';

const categorySchema = new Schema<Category>({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

export default model<Category>('Category', categorySchema);