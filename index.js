const express =require('express');
const axios =require('axios');
const app = express();

app.get('/', (req,res) => {
    res.send({message: "HelloWorld"});
});
async function getProducts(){
    const API_DOMAIN = "https://fakestoreapi.com/";
    const response = await axios.get(API_DOMAIN + 'products')
    console.log(response);
    return (response).data;
}

app.get('/products', async(req,res) => {
    const products =await getProducts();
    res.send(products);
})

async function getProductsWithId(id){
    const API_DOMAIN = "https://fakestoreapi.com/";
    const response = await axios.get(API_DOMAIN + 'products/' +id)
    return (response).data;
}

app.get('/products/:id', async(req,res) => {
    const products =await getProductsWithId(req.params.id);
    res.send(products);
})

app.get('/products/:id', async(req,res) => {
    console.log(req.params.id);
    const products =await getProducts();
    res.send(products);
})
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running in PORT:${PORT}`);
})