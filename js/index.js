// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');  
  
  let price =product.querySelector('.price span').innerText;
  let quantity =product.querySelector('.quantity input').value;

  let subtotal= price*quantity;

  let subtotalElem =product.querySelector('.subtotal span');

  subtotalElem.innerText= subtotal;

  return subtotal
}



function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test


  // ITERATION 2
 
  let count = 0;
  const singleProduct = document.querySelectorAll('.product');
  
  for(let i=0;i<singleProduct.length; i++){
  count= count+ updateSubtotal(singleProduct[i])
  }
 // ITERATION 3

  let total= document.querySelector('#total-value span');
  total.innerText= count;
  
}
  
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

  let removeProduct= document.querySelectorAll('.btn btn-remove')

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
