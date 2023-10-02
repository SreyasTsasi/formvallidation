console.log()
let response=fetch("https://dummyjson.com/products")
response.then(res => {
    return res.json()
})
.then(data => {
    data.products.forEach(element => {
        console.log(element.brand);
        let card=`

        <h1>${element.title}</h1>
        `
        prod.innerHTML += card;
    });
})
