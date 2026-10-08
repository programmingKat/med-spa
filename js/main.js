// Goal: Build a simple front-end app that uses 
// data returned from one api to make a request to another api to create something that 
// would be beneficial to a Med Spa.

const makeupURL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'
const exchangeURL = 'https://open.er-api.com/v6/latest/'
document.querySelector('button').addEventListener('click', getBeautyProducts)

//pull product by product type
function getBeautyProducts(){
    const productType = document.querySelector('#product_type').value
    const brand = document.querySelector('#brand').value.replaceAll(" ", "+")
    console.log(productType, brand)
    return fetch(`${makeupURL}brand=${brand}&product_type=${productType}`)
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        getPriceConversion(data[0].currency, data[0].price)
        
    })
}

 function getPriceConversion(currency, price){
    fetch(`${exchangeURL}${currency}`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
       console.log("data.rates.USD", data.rates.USD)
       console.log("price conversion", data.rates.USD*price)
    })
}
// get product names
// pull product by type using makeup api

//convert product price from CAD to several other prices using price conversion

