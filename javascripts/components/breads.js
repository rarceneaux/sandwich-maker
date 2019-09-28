import utilities from '../helpers/utilities.js';

const breads = [
  {id:'bread1',name:'White',price: 1.00 },
  {id:'bread2',name:'Wheat',price: 1.50 },
  {id:'bread3',name:'Pita',price: 2.00 },
  {id:'bread4',name:'Bun',price: 1.75 },
  {id:'bread5',name:'Rye',price: 2.50 },
  ];
  
  const getSelectedBread = () => {
    const selectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let d = 0; d < breadCheckboxes.length; d++){
      for(let e = 0; e < breads.length; e++){
        if(breadCheckboxes[d].checked && breadCheckboxes[d].id === breads[e].id){
          selectedBreads.push(breads[e]);
        }
      }
    }
  return selectedBreads;
  };
  
  const BreadPrint = () => {
    let breadString = '';
    for (let f = 0; f <breads.length;f++){
      breadString += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input bread" id="${breads[f].id}">
      <label class="form-check-label" for="${breads[f].id}">${breads[f].name}</label>
    </div>`;
    utilities.PTD('bread',breadString);
    }
  };


  export default { BreadPrint,getSelectedBread };