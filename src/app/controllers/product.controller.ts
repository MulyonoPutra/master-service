import { NextFunction, Request, Response } from "express";
import productSchema from "../models/product.schema";
import categorySchema from "../models/category.schema";

const hideProps = {
	__v: 0,
	createdAt: 0,
	updatedAt: 0,
};

export const findAll = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const data = await productSchema.find({}, hideProps);
		if (data.length === 0) {
			return res.status(200).json({
				message: "Not found!",
			});
		}

		return res.status(200).json({
			message: "Successfully retrieved!",
			data,
		});
	} catch (e) {
		console.error(e);
	}
};

export const create = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { category: { id }, } = req.body;
		const category = await categorySchema.findById(id);
		const newProduct = await productSchema.create({
			...req.body,
			category: { _id: category?._id },
		});


		return res.status(201).json({
			message: "New Product Created!",
			data: newProduct,
		});
	} catch (e) {
		console.error(e);
	}
};

export const findById = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const data = await productSchema.findOne({ _id: id }, hideProps);
		return res.status(200).json({
			message: "Data successfully retrieved",
			data,
		});
	} catch (e) {
		console.error(e);
	}
};

export const remove = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;

		await productSchema.findByIdAndRemove(id);

		return res.status(200).json({
			message: "Data successfully removed",
		});
	} catch (e) {
		console.error(e);
	}
};

export const update = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { id } = req.params;
		const { name, price, quantity, sku, description } = req.body;

		let product = await productSchema.findOne({ _id: id });

		const newProduct = { name, price, quantity, sku, description };

		product = await productSchema.findOneAndUpdate({ _id: id }, newProduct, {
			new: true,
		});
		return res.status(200).json({ message: "Success", data: product });
	} catch (e) {
		console.error(e);
	}
};
