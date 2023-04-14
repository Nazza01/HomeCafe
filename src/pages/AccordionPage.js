import Accordion from "../components/Accordion";

function AccordionPage() 
{
	const items = [
		{
			id: 'abc123',
			label: 'Can I use React on a project?',
			content: 'You can use React on any project you want. React is a good way to learn how webpages can interact with a server and modify it as such.'
		},
		{
			id: 'def456',
			label: 'Can I use Javascript on a project?',
			content: 'You can use Javascript on any project you want. Javascript is a good way to interact with various web elements and change it as needed.'
		},
		{
			id: 'hij789',
			label: 'Can I use CSS on a project?',
			content: 'You can use CSS on any project you want. CSS is a cascading style sheet which can arrange and format style for a given page'
		}
	]
	return (<Accordion items={items} />);
}

export default AccordionPage;