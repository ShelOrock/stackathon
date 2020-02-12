const express = require('express');
const path = require('path')

const PORT = 3000;

const app = express();

app.use(express.json())

app.use(express.static(path.join('__dirname', '..', './public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`App is listening on localhost:${ PORT }`)
})