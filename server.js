const express = require('express');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(__dirname + '/public/'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}` ));