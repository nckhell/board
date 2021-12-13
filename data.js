function getData() {
	const urlGo = "https://master--kanban-go--dev.webix.io";
	const urlNode = "https://master--kanban-node--dev.webix.io";


	const cardShape = {
		label: true,
		description: false,
		progress: false,
		start_date: false,
		end_date: false,
		users: {
			show: false,
		},
		priority: {
			show: false
		},
		color: false,
		menu: false,
		cover: false,
		attached: false,
	};

	const columns = [
		{
			label: "To do",
			id: "todo",
		},
		{
			label: "In progress",
			id: "inprogress",
		},
		{
			label: "Done",
			id: "done",
		},
	];

	const stakholders = [
		{
			label: "Patient",
			id: "patient",
		},
		{
			label: "Nurse",
			id: "nurse"
		},
		{
			label: "Physician",
			id: "physician"
		},
	];

	const start_date = new Date("01/07/2021");
	const end_date = new Date("01/15/2021");

	const activities = [
		{
			label: "Activity #1",
			start_date: new Date("01/07/2021"),
			column: "todo",
			stakeholder: "patient",
		},
		{
			label: "Activity #2",
			column: "todo",
			stakeholder: "patient",
		},
		{
			label: "Activity #3",
			start_date: new Date("01/09/2021"),
			column: "todo",
			stakeholder: "patient",
		},
		{
			label: "Activity #4",
			start_date: new Date("12/21/2020"),
			column: "inprogress",
			stakeholder: "patient"
		},
		{
			label: "Activity #5",
			start_date: new Date("01/07/2021"),
			column: "inprogress",
			stakeholder: "nurse",
		},
		{
			label: "Activity #6",
			start_date: new Date("12/21/2020"),
			column: "inprogress",
			stakeholder: "nurse",
		},
		{
			label: "Activity #7",
			start_date: new Date("01/07/2021"),
			column: "done",
			stakeholder: "nurse",
		},
		{
			label: "Activity #8",
			column: "done",
			stakeholder: "physician",
		},
		{
			label: "Activity #9",
			start_date: new Date("12/9/2020"),
			column: "done",
			stakeholder: "physician",
		},
	];

	return {
		rows: stakholders,
		columns,
		cards: activities,
		cardShape,
		urlGo,
		urlNode,
	};
}
