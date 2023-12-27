const express = require('express');
const db = require('./db/db');
const morgan = require('morgan');
const products = require('./model/productModel');
const Arrivals = require('./model/arrivalsModel');
const Trending = require('./model/trendingModel');

const app = express();
const port = 7000;


app.use(morgan('tiny'));
app.use(express.urlencoded({extended: true}))

//products route
app.get('/products', async(req, res)=>{
    const data = await products.find();
    res.json(data);
});

app.get('/products/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await products.find({id : +id});
    res.json(data);
});

app.post('/products', async(req, res)=>{
    const newProductData = req.body;
    const newProduct = new products(newProductData);
    newProduct.save()
    .then(()=>console.log("New product added successfully"))
    .catch((err)=>{
        if(err)throw err;
    });
    res.json("added" + newProduct);
});

app.put('/products/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const newProduct = await products.findOneAndUpdate({id: +id}, body);
    res.json("updated");
});

app.patch('/products/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const newProduct = await products.findOneAndUpdate({id: +id}, body);
    res.json("updated");
});

app.delete('/products/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await products.deleteOne({id : +id});
    console.log(data);
    res.json("deleted");
});


//arrivals routes
app.get('/arrivals', async(req, res)=>{
    const data = await Arrivals.find();
    res.json(data);
});
app.get('/arrivals/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await Arrivals.find({product_id : +id});
    res.json(data);
});
app.post('/arrivals', async(req, res)=>{
    const newProductData = req.body;
    console.log(req.body);
    const newProduct = new Arrivals(newProductData);
    newProduct.save()
    .then(()=>console.log("New product added successfully"))
    .catch((err)=>{
        if(err)throw err;
    });
    res.json("added" + newProduct);
});
app.put('/arrivals/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const newProduct = await Arrivals.findOneAndUpdate({product_id: +id}, body);
    res.json("updated");
});
app.patch('/arrivals/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const newProduct = await Arrivals.findOneAndUpdate({product_id: +id}, body);
    res.json("updated");
});
app.delete('/arrivals/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await Arrivals.deleteOne({product_id : +id});
    console.log(data);
    res.json("deleted");
});


//trending routes
app.get('/trending', async(req, res)=>{
    const data = await Trending.find();
    res.json(data);
});
app.get('/trending/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await Trending.find({product_id : +id});
    res.json(data);
});
app.post('/trending', async(req, res)=>{
    const newProductData = req.body;
    console.log(req.body);
    const newProduct = new Trending(newProductData);
    newProduct.save()
    .then(()=>console.log("New product added successfully"))
    .catch((err)=>{
        if(err)throw err;
    });
    res.json("added" + newProduct);
});
app.put('/trending/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const newProduct = await Trending.findOneAndUpdate({product_id: +id}, body);
    res.json("updated");
});
app.patch('/trending/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    const newProduct = await Trending.findOneAndUpdate({product_id: +id}, body);
    res.json("updated");
});
app.delete('/trending/:id', async(req, res)=>{
    const id = req.params.id;
    const data = await Trending.deleteOne({product_id : +id});
    console.log(data);
    res.json("deleted");
});



app.listen(port ,() => {
    console.log('====================================');
    console.log("port is listening on " + port);
    console.log('====================================');
});
