import utilities from '../helpers/utilities.js';
import breads from './breads.js';
import cheese from './cheese.js';
import meats from './meats.js';

const createFinalOrder = (items) => {
  let StringA = '';
  for(let i =0; i < items.length;i++){
    StringA +=`<h2>${items[i].name}</h2>`;
    // StringA +=`<h2>${items[i].price}</h2>`;
  }
  utilities.PTD('review-order',StringA);
};

const createOrderEvent = () => {
  const selectedBreads = breads.getSelectedBread();
  const selectedCheeses = cheese.getSelectedCheese();
  const selectedMeats = meats.getSelectedMeat();
  const allItems = [].concat(selectedBreads,selectedCheeses,selectedMeats);
  createFinalOrder(allItems);
};

const printOrderButton = () => {
  const string = '<button id="order-button" class="btn btn-success">Success</button>';
  utilities.PTD('final-order',string);
  document.getElementById('order-button').addEventListener('click',createOrderEvent);
};

export default { printOrderButton };