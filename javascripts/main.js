import breads from './components/breads.js';
import sandwich from './components/sandwich.js';
import cheeses from './components/cheese.js';
import meats from './components/meats.js';
import condiments from './components/condiments.js';
import veggies from './components/veggies.js';


const init = () => {
 breads.BreadPrint();
 cheeses.CheesePrint();
 meats.MeatPrint();
 condiments.ComsPrint();
 veggies.VeggiePrint();
 sandwich.printOrderButton();
};
init();

