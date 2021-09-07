const express = require('express');

const app= express();
app.get('/',(req, res) =>res.send('<h1> APP DE NODE JS</h1>'))




app.listen(8000);
console.log('server on port 8000 al');