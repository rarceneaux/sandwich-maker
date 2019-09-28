

import utilities from '../helpers/utilities.js';
import breads from './breads.js';
import cheese from './cheese.js';
import meats from './meats.js';
import condiments from './condiments.js';
import veggies from './veggies.js';

const createFinalOrder = (items) => {
  const total = items.reduce((prev,curr) => prev + curr.price, 0);
  let StringA = '';
  for(let i =0; i < items.length;i++){
    StringA +=`<h2>${items[i].name} $${items[i].price.toFixed(2)}</h2>`;
  }
  StringA += `<hr><h1>Total =$${total.toFixed(2)}</h1>`;
  utilities.PTD('review-order',StringA);
};

const createOrderEvent = () => {
  const selectedBreads = breads.getSelectedBread();
  const selectedCheeses = cheese.getSelectedCheese();
  const selectedMeats = meats.getSelectedMeat();
  const selectedComs = condiments.getSelectedComs();
  const selectedVeggies = veggies.getSelectedVeggies();
  const allItems = [].concat(selectedBreads,selectedCheeses,selectedMeats,selectedComs,selectedVeggies);
  createFinalOrder(allItems);
};


const printOrderButton = () => {
  const string = '<button id="order-button" class="btn btn-danger">Review Order</button>';
  utilities.PTD('review-btn',string);
  document.getElementById('order-button').addEventListener('click',createOrderEvent);
}

const completeButton = () => {
  const finString = '<button id="complete-button" class="btn btn-success">Complete Order</button>'
  utilities.PTD ('final-order', finString);
  document.getElementById('complete-button').addEventListener('click', () => {
      utilities.PTD('review-order', '');
      utilities.PTD('review-btn', '');  
      utilities.PTD('review-order', alert('Thank you for your order'));
})
};

export default { printOrderButton,completeButton };