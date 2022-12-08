// console.log('work card js');

// receive id and return  that id's input value
const getElementUseId = id => {

    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';

    return inputValue;


}


// addproduct() is a onclick function
const addProduct = () => {
    const productName = getElementUseId('product-name-field');
    const productQuantity = getElementUseId('product-quantity-field');

    // console.log(productName, productQuantity);

    // set local stroage normal system
    displayItem(productName, productQuantity);

    // localStorage.setItem(productName, productQuantity);
    saveItemToProductQualicy(productName, productQuantity);

}




//this function get cart from localstroage and return cart as object
const getShoppingCardFromLocalStroage = () => {

    let saveCart = localStorage.getItem('cart');
    let cart = {};

    if (saveCart) {

        cart = JSON.parse(saveCart);

    }

    return cart;

}

const saveItemToProductQualicy = (product, quantity) => {
    const cart = getShoppingCardFromLocalStroage();

    //add product to the object ass object

    cart[product] = quantity;

    const stringfied = JSON.stringify(cart);

    //save to local stroage

    // localStorage.setItem(productName, productQuantity);

    localStorage.setItem('cart', stringfied);


}

//display the item in website 
const displayItem = (product, quantity) => {

    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');

    li.innerText = `${product} : ${quantity}`;

    productContainer.appendChild(li);

}


const displayStroyedProduct = () => {

    const cart = getShoppingCardFromLocalStroage();

    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        displayItem(product, quantity);
    }


}

displayStroyedProduct();
