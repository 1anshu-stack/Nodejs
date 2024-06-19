const express = require('express');
const phone = require('./data')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello home</h1><a href="/api/phone">click</a>')
})

// app.get('/api/phone', (req, res) => {
//     const newItem = phone.map((product) => {
//         const {id, name, image} = product;
//         return {id, name, image};
//     })
//     res.json(newItem);
// })

// app.get('/api/phone/:phoneID', (req, res) => {
//     const {phoneID} = req.params;
//     const singleProduct = phone.find((product) => product.id === Number(phoneID));
//     if(!singleProduct){
//         res.status(404).send('Product Not Found....')
//     }
//     res.json(singleProduct);
// })

app.get('/api/v1/query', (req, res) => {
    let sortedPhone = [...phone];
    const {search, limit} = req.query;
    if(search){
        sortedPhone = sortedPhone.filter((product) => {
            return product.name.toLowerCase().startsWith(search)
        })
    }
    let newArray = [];
    for(let i=0;i<limit && i<sortedPhone.length;i++){
        newArray.push(sortedPhone[i]);
    }
    res.json(newArray)
})

app.listen(3000, () => {
    console.log('server is running...')
})