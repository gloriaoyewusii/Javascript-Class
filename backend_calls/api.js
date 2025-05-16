const PRODUCT_URL = 'https://fakestoreapi.com/products';

const productsContainer = document.querySelector(".products");
const productsWrapper = document.getElementsByClassName("products");

console.log(productsContainer);
console.log(productsWrapper);


// const getProducts =(url)=> {
//     fetch(url)
//     .then((response)=>response.json())
//     .then((data)=>{
//         displayProducts(data);
//     })
//     .catch((error)=>console.log(error))
// };


const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data);
    } catch (error) {
        console.log(""+error);
    }
}
getProducts(PRODUCT_URL)

function displayProducts(products) {
    products.forEach ((product) => {
        console.log(product)
        const {title, price, description, image} = product;
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        createInnerHTML(productElement, image, title, price, description);
        productsContainer.appendChild(productElement);
    })

}

function createInnerHTML(productDiv, image, title, price, description) {
    productDiv.innerHTML = `
            <img src="${image}" alt="">
                <div>
                    <p>${title}</p>
                    <p>price: &#8358 ${price}</p>
                </div>
                <p>${description}</p>
            </div>
        `;
}

