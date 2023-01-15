/* Add a product to cart from jackets page*/
const button = document.querySelectorAll('button.cta-add-to-cart');

button.forEach(function(button) {
  button.addEventListener("click", function() {

    button.innerHTML = "Jacket added to cart";   
   
    button.style.background = "rgba(77, 92, 53, 0.7)";
   
    button.style.border = "rgba(77, 92, 53, 0.7)";   
  });
});


/* cart indicator */
const cartIndicator = document.querySelector(".cart-indicator");

button.forEach(function(button) { 
    button.addEventListener("click", function() {
        
        cartIndicator.innerHTML = "Product added to cart";
    });
});


/* Validate checkout form and add cart functionality */
const checkoutForm = document.querySelector("#checkoutForm");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#fullNameError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const cardholder = document.querySelector("#cardholder");
const cardholderError = document.querySelector("#cardholderError");

const cardnumber = document.querySelector("#cardnumber");
const cardnumberError = document.querySelector("#cardnumberError");

const expirationdate = document.querySelector("#expirationdate");
const expirationError = document.querySelector("#expirationError");

const ccvcode = document.querySelector("#ccvcode");
const ccvError = document.querySelector("#ccvError");

const formSuccessMessage = document.querySelector(".success");

const orderSummaryh2 = document.querySelector(".receipt");
const orderSumTotal = document.querySelector(".item-five");
const orderSumDiscCost = document.querySelector(".item-four");
const orderSumDisc = document.querySelector(".removeDisc");
const orderSumShip = document.querySelector(".removeShip");
const orderSumShipCost = document.querySelector(".item-three");
const orderSumVatCost = document.querySelector(".item-two");
const orderSumConf = document.querySelector(".orderConf");
const orderSumSubTot = document.querySelector(".item-one");
const orderConfirm = document.querySelector(".confirmOrder");
const orderTotal = document.querySelector(".total");
const orderCartEmpty = document.querySelector(".border");

const btn = document.querySelector("button.cta-checkout");

const checkoutSuccess = document.querySelector(".checkout-success");
const emptyCart = document.querySelector(".emptyCart");
const checkoutComplete = document.querySelector(".checkoutComplete");


function validateCardNumber(cardnumber) {
    const regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const validPattern = regEx.test(cardnumber);
    return validPattern;
}

function validateExpirationDate(expirationdate) {
    const regEx = /^((0[1-9])|(1[0-2]))[\/\.\-]*((0[8-9])|(1[0-9]))$/;
    const validPattern = regEx.test(expirationdate);
    return validPattern;
}

function validateCcvCode(ccvcode) {
    const regEx = /^[0-9]{3, 4}$/;
    const validPattern = regEx.test(ccvcode);
    return validPattern;
}

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateForm(event) {
    event.preventDefault();

    if (checkLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(address.value, 0) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }   
    
    if (checkLength(cardholder.value, 0) === true) {
        cardholderError.style.display = "none";
    } else {
        cardholderError.style.display = "block";
    }    

    if (checkLength(cardnumber.value, 15) === true) {
        cardnumberError.style.display = "none";
    } else {
        cardnumberError.style.display = "block";
    }

    if (checkLength(expirationdate.value, 7) === true) {
        expirationError.style.display = "none";
    } else {
        expirationError.style.display = "block";
    }

    if (checkLength(ccvcode.value, 2) === true) {
        ccvError.style.display = "none";
    } else {
        ccvError.style.display = "block";
    }       

    console.log("validateForm"); 
}

checkoutForm.addEventListener("submit", validateForm);


function formValidated() {
    if (checkLength(fullName.value, 0) && checkLength(address.value, 0) && checkLength(cardholder.value, 0) && checkLength(cardnumber.value, 15) && checkLength(expirationdate.value, 7) && checkLength(ccvcode.value, 2) === true) {
        formSuccessMessage.innerHTML = `<div><p class="formSuccess">${"Thank you for your order. You have successfully purchased the product."}</p></div>`;
        orderSummaryh2.innerHTML = "Order confirmation";    
        orderSumTotal.style.display = "none";
        orderSumDiscCost.style.display = "none";
        orderSumDisc.style.display = "none";
        orderSumShip.innerHTML = "Order status is complete.";
        orderSumShipCost.style.display = "none";
        orderSumVatCost.style.display = "none";
        orderSumConf.innerHTML = "Your order has been processed.";
        orderSumSubTot.style.display = "none";
        orderConfirm.innerHTML = "";
        orderTotal.innerHTML = "Your order number #1835252";
        orderCartEmpty.style.display = "none";

        btn.innerHTML = "Checkout success!";   
        btn.style.background = "rgba(77, 92, 53, 0.7)";
        btn.style.border = "rgba(77, 92, 53, 0.7)";  

        checkoutSuccess.innerHTML = "Checkout successful!";
        emptyCart.innerHTML = "1. Your cart is currently empty";
        checkoutComplete.innerHTML = "2. Checkout complete";

        checkoutForm.reset();
    } 
}

checkoutForm.addEventListener("submit", formValidated);