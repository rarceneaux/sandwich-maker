import utilities from '../helpers/utilities.js';

const sandwichs = [
{id:'sandwich1',name:'BLT',price: 25 },
{id:'sandwich2',name:'Turkey',price: 50 },
{id:'sandwich3',name:'Tuna',price: 65 },
{id:'sandwich4',name:'Ham',price: 75 },
{id:'sandwich5',name:'Balogna',price: 99 },
];

const getSelectedSandwichs = () => {
  const selectedSandwichs = [];
  const sandwichCheckboxes = document.getElementsByClassName('sandwich');
  for (let a = 0; a < sandwichCheckboxes.length; a++){
    for(let b = 0; b < sandwichs.length; b++){
      if(sandwichCheckboxes[a].checked && sandwichCheckboxes[a].id === sandwichs[b].id){
        selectedSandwichs.push(sandwichs[b]);
      }
    }
  }
return selectedSandwichs;
};

const sandwichPrint = () => {
  let domString = '';
  for (let c = 0; c <sandwichs.length;c++){
    domString += `<div class="form-group form-check">
    <input type="checkbox" class="form-check-input sandwich" id="${sandwichs[c].id}">
    <label class="form-check-label" for="${sandwichs[c].id}">${sandwichs[c].name}</label>
  </div>`;
  utilities.PTD('sandwich',domString);
  }
};


export default { sandwichPrint, getSelectedSandwichs };