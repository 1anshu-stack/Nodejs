const express = require('express')
const bodyparser = require('body-parser')

const admin = require('../01Express/routes/admin')
const shop = require('../01Express/routes/shop')

const app = express();

app.use(bodyparser.urlencoded({extended:false}))


app.use(admin)
app.use(shop)



app.listen(3000)