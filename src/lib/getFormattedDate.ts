const getFormattedDate = (dateString: string) => {
	const dateObject = new Date(dateString);
	const date = dateObject.getDate();
	const month = dateObject.toLocaleString("en-US", { month: "long" });
	const year = dateObject.getFullYear();
	return `${month} ${date}, ${year}`;
};

export default getFormattedDate;
