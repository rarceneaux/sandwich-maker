import utilities from '../helpers/utilities.js';

const veggies = [
  {id:'veggie1',name:'Lettuce',price: 25 },
  {id:'veggie2',name:'Spinach',price: 50 },
  {id:'veggie3',name:'Tomato',price: 65 },
  {id:'veggie4',name:'Cucumber',price: 75 },
  {id:'veggie5',name:'Pickles',price: 99 },
  ];
  
  const getSelectedVeggies = () => {
    const selectedVeggies = [];
    const veggiesCheckboxes = document.getElementsByClassName('veggie');
    for (let m = 0; m < veggiesCheckboxes.length; m++){
      for(let n = 0; n < veggies.length; n++){
        if(veggiesCheckboxes[m].checked && veggiesCheckboxes[m].id === veggies[n].id){
          selectedVeggies.push(veggies[n]);
        }
      }
    }
  return selectedVeggies;
  };
  
  const VeggiePrint = () => {
    let vegString = '';
    for (let s = 0; s <veggies.length;s++){
      vegString += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input veggie" id="${veggies[s].id}">
      <label class="form-check-label" for="${veggies[s].id}">${veggies[s].name}</label>
    </div>`;
    utilities.PTD('veggies',vegString);
    }
  };


  export default { VeggiePrint,getSelectedVeggies };