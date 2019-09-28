import utilities from '../helpers/utilities.js';
import breads from './breads.js';
import cheese from './cheese.js';
import meats from './meats.js';
import condiments from './condiments.js';
import veggies from './veggies.js';

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
  const selectedComs = condiments.getSelectedComs();
  const selectedVeggies = veggies.getSelectedVeggies();
  const allItems = [].concat(selectedBreads,selectedCheeses,selectedMeats,selectedComs,selectedVeggies);
  createFinalOrder(allItems);
};

const printOrderButton = () => {
  const string = '<button id="order-button" class="btn btn-success">Success</button>';
  utilities.PTD('final-order',string);
  document.getElementById('order-button').addEventListener('click',createOrderEvent);
};

export default { printOrderButton };