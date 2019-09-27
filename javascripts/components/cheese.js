import utilities from '../helpers/utilities.js';

const cheeses = [
  {id:'cheese1',name:'american',price: 25 },
  {id:'cheese2',name:'swiss',price: 50 },
  {id:'cheese3',name:'goat',price: 65 },
  {id:'cheese4',name:'monterey jack',price: 75 },
  {id:'cheese5',name:'cheddar',price: 99 },
  ];
  
    const getSelectedCheese = () => {
      const selectedCheeses = [];
      const cheeseCheckboxes = document.getElementsByClassName('cheese');
      for (let a = 0; a < cheeseCheckboxes.length; a++){
        for(let b = 0; b < cheeses.length; b++){
          if(cheeseCheckboxes[a].checked && cheeseCheckboxes[a].id === cheeses[b].id){
            selectedCheeses.push(cheeses[b]);
// console.log(selectedCheeses);
          }
        }
      }
    return selectedCheeses;
    };
    
    const CheesePrint = () => {
      let cheeseString = '';
      for (let c = 0; c <cheeses.length;c++){
        cheeseString += `<div class="form-group form-check">
        <input type="checkbox" class="form-check-input cheese" id="${cheeses[c].id}">
        <label class="form-check-label" for="${cheeses[c].id}">${cheeses[c].name}</label>
      </div>`;
      utilities.PTD('cheese',cheeseString);
      // console.log(cheeseString);
      }
    };
  
  
    export default { CheesePrint,getSelectedCheese };
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 