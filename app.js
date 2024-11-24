const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'documents')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'documents', 'index.html'));
});


app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received data: Name - ${name}, Email - ${email}, Message - ${message}`);

    res.send('đã nhận!');
});


app.listen(port, () => {
    console.log(`Server đang chạy trên cổng ${port}`);
});
