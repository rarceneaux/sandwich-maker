import breads from './components/breads.js';
import sandwich from './components/sandwich.js';
import cheeses from './components/cheese.js';
import meats from './components/meats.js';


const init = () => {
 breads.BreadPrint();
 cheeses.CheesePrint();
 meats.MeatPrint();
 sandwich.printOrderButton();
};
init();

