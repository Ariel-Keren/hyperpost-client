export type Comment = {
	text: string;
	createdBy: string;
	createdAt: Date;
	updatedAt: Date;
};

export type Post = {
	title: string;
	text: string;
	createdBy: string;
	createdAt: Date;
	updatedAt: Date;
	comments: Comment[];
};

export type Hyper = {
	name: string;
	description: string;
	createdBy: string;
	createdAt: Date;
	updatedAt: Date;
	posts: Post[];
};

export type HyperDisplay = {
	name: string;
	createdBy: string;
	createdAt: Date;
};

const isArray = (data: unknown): data is unknown[] => Array.isArray(data);

export const isHyperDisplayArray = (data: unknown): data is HyperDisplay[] =>
	isArray(data) &&
	data.every(
		(element) =>
			element &&
			typeof element === "object" &&
			"name" in element &&
			"createdBy" in element &&
			"createdAt" in element &&
			typeof element.name === "string" &&
			typeof element.createdBy === "string" &&
			element.createdAt instanceof Date
	);

const isCommentArray = (data: unknown): data is Post[] =>
	isArray(data) &&
	data.every(
		(element) =>
			element &&
			typeof element === "object" &&
			"text" in element &&
			"createdBy" in element &&
			"createdAt" in element &&
			"updatedAt" in element &&
			typeof element.text === "string" &&
			typeof element.createdBy === "string" &&
			element.createdAt instanceof Date &&
			element.updatedAt instanceof Date
	);

const isPostArray = (data: unknown): data is Post[] =>
	isArray(data) &&
	data.every(
		(element) =>
			element &&
			typeof element === "object" &&
			"title" in element &&
			"text" in element &&
			"createdBy" in element &&
			"createdAt" in element &&
			"updatedAt" in element &&
			"comments" in element &&
			typeof element.title === "string" &&
			typeof element.text === "string" &&
			typeof element.createdBy === "string" &&
			element.createdAt instanceof Date &&
			element.updatedAt instanceof Date &&
			isCommentArray(element.comments)
	);

export const isHyper = (data: unknown): data is Hyper => {
	if (
		data &&
		typeof data === "object" &&
		"name" in data &&
		"description" in data &&
		"createdBy" in data &&
		"createdAt" in data &&
		"updatedAt" in data &&
		"posts" in data &&
		typeof data.name === "string" &&
		typeof data.description === "string" &&
		typeof data.createdBy === "string" &&
		data.createdAt instanceof Date &&
		data.updatedAt instanceof Date &&
		isPostArray(data.posts)
	)
		return true;
	return false;
};
