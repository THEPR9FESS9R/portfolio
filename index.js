const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello World!');
    res.sendFile('/app/dist/index.html');
});

app.listen(80, () => {
    console.log('app listening on port 8081!')
});
