const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');

app.use(cors());

app.get('/pdf', (req, res) => {
    (async () => {
        const browser = await launch();
        const page = await browser.newPage();
        await page.goto(`http://localhost:${port}/`);
        await page.pdf({ path: 'SebastiaanSimonsResume.pdf', format: 'a4' });
        await browser.close();
    })();
});

app.use(express.static('public'));
app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});