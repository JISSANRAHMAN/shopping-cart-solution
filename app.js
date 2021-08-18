function mobileCaseNumber(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = parseInt(productInput.value);
    if (isIncrease == true) {
        productNumber = productNumber + 1;
    }
    else if (productNumber > 0) {
        productNumber = productNumber - 1;
    }
    productInput.value = productNumber;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;

    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-balance').innerText = total;

}

document.getElementById('case-plus-btn').addEventListener('click', function () {

    mobileCaseNumber('case', 59, true);
    // const caseInput = document.getElementById('case-input');
    // const caseNumber = parseInt(caseInput.value);
    // caseInput.value = caseNumber + 1;
});

document.getElementById('case-minus-btn').addEventListener('click', function () {

    const minus = mobileCaseNumber('case', 59, false);
    // const caseInput = document.getElementById('case-input');
    // const caseNumber = parseInt(caseInput.value);
    // caseInput.value = caseNumber - 1;
});

document.getElementById('phone-plus-btn').addEventListener('click', function () {
    mobileCaseNumber('phone', 1219, true);

});
document.getElementById('phone-minus-btn').addEventListener('click', function () {
    mobileCaseNumber('phone', 1219, false);

});
