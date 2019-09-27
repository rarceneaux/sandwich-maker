import utilities from '../helpers/utilities.js';

const condiments = [
  {id:'condiment1',name:'mayo',price: 25 },
  {id:'condiments2',name:'mustard',price: 50 },
  {id:'condiments3',name:'ketchup',price: 65 },
  {id:'condiments4',name:'relish',price: 75 },
  {id:'condiments5',name:'hummis',price: 99 },
  ];
  
  const getSelectedComs = () => {
    const selectedComs = [];
    const comsCheckboxes = document.getElementsByClassName('condiments');
    for (let w = 0; w < comsCheckboxes.length; w++){
      for(let y = 0; y < condiments.length; y++){
        if(comsCheckboxes[w].checked && comsCheckboxes[w].id === condiments[y].id){
          selectedComs.push(condiments[y]);
        }
      }
    }
  return selectedComs;
  };
  
  const ComsPrint = () => {
    let comsString = '';
    for (let u = 0; u <condiments.length;u++){
      comsString += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input condiments" id="${condiments[u].id}">
      <label class="form-check-label" for="${condiments[u].id}">${condiments[u].name}</label>
    </div>`;
    utilities.PTD('condiments',comsString);
    }
  };


  export default { ComsPrint,getSelectedComs };