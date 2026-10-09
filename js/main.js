// Goal: Build a simple front-end app that uses 
// data returned from one api to make a request to another api to create something that 
// would be beneficial to a Med Spa.

const makeupURL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'
const exchangeURL = 'https://open.er-api.com/v6/latest/'
document.querySelector('button').addEventListener('click', getBeautyProducts)

//pull product by product type
function getBeautyProducts() {
    const productType = document.querySelector('#product_type').value
    const brand = document.querySelector('#brand').value.replaceAll(" ", "+")
    console.log(productType, brand)
    return fetch(`${makeupURL}brand=${brand}&product_type=${productType}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const makeupProducts = (data)
            console.log(makeupProducts)
            //data.name
            //data.brand
            //data.description
            //data.price
            const resultsDiv = document.querySelector('#product-results')
            for (const product of makeupProducts) {
                //console.log("center obj", center)
                const newDiv = document.createElement('div')
                newDiv.classList.add('product-info')

                const productName = document.createElement('span')
                productName.innerText = product.name
                newDiv.appendChild(productName)

                const productBrand = document.createElement('span')
                productBrand.innerText = product.brand
                newDiv.appendChild(productBrand)

                const productDescription = document.createElement('p')
                productDescription.innerText = product.description
                newDiv.appendChild(productDescription)

                // let priceResults = getPriceConversion(data.currency, data.price)
                //     .then(data => {
                //         console.log("data", data)


                //         const productPriceConversion = document.createElement('span')
                //         productPriceConversion.innerText = `Price in USD is ${data.rates.USD * price} `

                        // console.log("data.rates.USD", data.rates.USD)
                        // console.log("price conversion", )


                        // newDiv.appendChild(productPriceConversion)
                        resultsDiv.appendChild(newDiv)
                    // })
            }
            resultsDiv.classList.toggle('.hidden')



        })
}

function getPriceConversion(currency, price) {
    fetch(`${exchangeURL}${currency}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log("data.rates.USD", data.rates.USD)
            console.log("price conversion", data.rates.USD * price)
            return data
        })
}
// get product names
// pull product by type using makeup api

//convert product price from CAD to several other prices using price conversion

