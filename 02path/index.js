const express = require('express');
const path = require('path')
const app = express();

app.use(express.static('demo'))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'demo', 'index.html'))
// })

app.listen(3000, () => {
    console.log('server is running....')
})