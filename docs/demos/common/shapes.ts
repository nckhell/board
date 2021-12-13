export const cardShape = {
	label: {
		show: true,
	},
	description: {
		show: true,
	},
	progress: {
		show: false,
	},
	date: {
		show: true,
	},
	users: {
		show: false,
		values: [
			{
				id: 1,
				label: "Steve Smith",
				path: "user.jpg",
			},
			{
				id: 2,
				label: "Aaron Long",
			},
			{
				id: 3,
				label: "Angela Allen",
			},
		],
	},
	priority: {
		show: true,
	},
	color: {
		show: true,
	},
	headerFields: [
		{
			key: "sprint",
			type: "text",
		},
		{
			key: "feature",
			type: "text",
		},
	],
	menu: {
		show: true,
	},
};
