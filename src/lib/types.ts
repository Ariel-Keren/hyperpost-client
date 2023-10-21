export type Comment = {
	text: string;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	_id: string;
};

export type Post = {
	title: string;
	text: string;
	createdBy: string;
	favorites: number;
	createdAt: string;
	updatedAt: string;
	comments: Comment[];
	_id: string;
};

export type Hyper = {
	name: string;
	description: string;
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	posts: Post[];
};

export type HyperDisplay = {
	name: string;
	createdBy: string;
	createdAt: string;
	favorites: string[];
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
			typeof element.createdAt === "string"
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
			"_id" in element &&
			typeof element.text === "string" &&
			typeof element.createdBy === "string" &&
			typeof element.createdAt === "string" &&
			typeof element.updatedAt === "string" &&
			typeof element._id === "string"
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
			"_id" in element &&
			typeof element.title === "string" &&
			typeof element.text === "string" &&
			typeof element.createdBy === "string" &&
			typeof element.createdAt === "string" &&
			typeof element.updatedAt === "string" &&
			isCommentArray(element.comments) &&
			typeof element._id === "string"
	);

export const isHyper = (data: unknown): data is Hyper =>
	!!(
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
		typeof data.createdAt === "string" &&
		typeof data.updatedAt === "string" &&
		isPostArray(data.posts)
	);
