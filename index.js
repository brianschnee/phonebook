const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3001;

const persons = [
	{
		'id': 1,
		'name': 'Arto Hellas',
		'number': '040-123456',
	},
	{
		'id': 2,
		'name': 'Ada Lovelace',
		'number': '39-44-5323523',
	},
	{
		'id': 3,
		'name': 'Dan Abramov',
		'number': '12-43-234345',
	},
	{
		'id': 4,
		'name': 'Mary Poppendieck',
		'number': '39-23-6423122',
	},
];

app.get('/api/persons', (req, res) => {
	res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id);
	const person = persons.find((person) => person.id === id);

	if (person) {
		res.json(person);
	} else {
		res.status(404).json({ 'error': 'id not found' });
	}
});

app.get('/info', (req, res) => {
	res.send(`<p>Phonebook has info for ${persons.length} people.</p>\n
    <p>${new Date()}</p>`);
});

app.listen(PORT, () =>
	console.log(
		`The server is running on ${PORT}, you better go and catch it!`,
	),
);
