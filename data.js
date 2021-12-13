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

	const columns = {
        stakeholder: [
            {
                label: "Patient",
                id: "patient",
            },
            {
                label: "Nurse",
                id: "nurse",
            },
            {
                label: "Physician",
                id: "physician",
            },
        ],
        status: [
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
        ]
    }

	const rows = {
        stakeholders: [
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
        ],
        status: [
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
        ]
    }

	const start_date = new Date("01/07/2021");
	const end_date = new Date("01/15/2021");

	const activities = [
		{
			id: 1,
			label: "Activity #1",
			start_date: new Date("01/07/2021"),
			status: "todo",
			stakeholder: "patient",
		},
		{
			label: "Activity #2",
			status: "todo",
			stakeholder: "patient",
		},
		{
			label: "Activity #3",
			start_date: new Date("01/09/2021"),
			status: "todo",
			stakeholder: "patient",
		},
		{
			label: "Activity #4",
			start_date: new Date("12/21/2020"),
			status: "inprogress",
			stakeholder: "patient"
		},
		{
			label: "Activity #5",
			start_date: new Date("01/07/2021"),
			status: "inprogress",
			stakeholder: "nurse",
		},
		{
			label: "Activity #6",
			start_date: new Date("12/21/2020"),
			status: "inprogress",
			stakeholder: "nurse",
		},
		{
			label: "Activity #7",
			start_date: new Date("01/07/2021"),
			status: "done",
			stakeholder: "nurse",
		},
		{
			label: "Activity #8",
			status: "done",
			stakeholder: "physician",
		},
		{
			label: "Activity #9",
			start_date: new Date("12/9/2020"),
			status: "done",
			stakeholder: "physician",
		},
	];

	return {
		rows,
		columns,
		cards: activities,
		cardShape,
		urlGo,
		urlNode,
	};
}
