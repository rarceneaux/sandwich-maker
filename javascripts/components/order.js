import breads from './breads.js';
import sandwich from './sandwich.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (items) => {
  let orderString = '';
  for(let i = 0; i<items.lenght;i++){
    orderString += `<h2>${items[i].name}</h2>`
  }
  utilities.PTD('final-order',orderString);
}

const createOrderEvent = () => {
  const selectedBread = breads.getSelectedBread();
  const selectedSandwich = sandwich.getSelectedSandwichs();
  createFinalOrder(selectedSandwich,selectedBread);
};

const printOrderBtn = () => {
  const btnString = '<button  id="order-btn" class="btn btn-danger">Review Order</button>'
  utilities.PTD('btn-Div',btnString);
  document.getElementById('order-btn').addEventListener('click',createOrderEvent);
};

export default { printOrderBtn };