const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// setup template engine
app.set('view engine','ejs');

//app.set('views', 'views');

// setup static directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=> {
    res.render('index', {
        title: 'Homepage',
        name: 'aboanas'
    });
})

app.get('/help', (req,res)=> {
    res.render('help', {
        title: 'Help Page',
        name: 'abosalem'
    });
})

app.get("/weather", (req,res)=>{
console.log(req.query.address);
    if (!req.query.address){
        return res.send({
            error: 'No address provided yet'
        })
    }
    res.send({
        location: 'Tanta',
        forecast: "55",
        address: req.query.address
    })
})

app.get("/products", (req,res)=>{

    if (!req.query.search) {
        return res.send({
            error: 'you must provide search term'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })
})

app.get("*", (req,res)=>{
    res.send('404 NOT FOUND PAGE')
})

app.listen(port, ()=> {
    console.log(`Server running @ ${port}...`);
})