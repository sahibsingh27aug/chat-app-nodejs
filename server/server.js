const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(publicPath));

// app.get('/', () => {

// });

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});





/* Used Code

console.log(__dirname + '../public');
console.log(publicPath);

*/