import utilities from '../helpers/utilities.js';

const meats = [
  {id:'meat1',name:'Bacon',price: 25 },
  {id:'meat2',name:'Baloney',price: 50 },
  {id:'meat3',name:'Tuna',price: 65 },
  {id:'meat4',name:'Ham',price: 75 },
  {id:'meat5',name:'Turkey',price: 99 },
  ];
  
  const getSelectedMeat = () => {
    const selectedMeats = [];
    const meatCheckboxes = document.getElementsByClassName('meat');
    for (let g = 0; g < meatCheckboxes.length; g++){
      for(let h = 0; h < meats.length; h++){
        if(meatCheckboxes[g].checked && meatCheckboxes[g].id === meats[h].id){
          selectedMeats.push(meats[h]);
        }
      }
    }
  return selectedMeats;
  };
  
  const MeatPrint = () => {
    let meatString = '';
    for (let v = 0; v <meats.length;v++){
      meatString += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input meat" id="${meats[v].id}">
      <label class="form-check-label" for="${meats[v].id}">${meats[v].name}</label>
    </div>`;
    utilities.PTD('meat',meatString);
    }
  };


  export default { MeatPrint,getSelectedMeat };