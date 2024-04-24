const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.json());

app.use(routes);
app.use('/upload', express.static(path.join(__dirname, 'images')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});