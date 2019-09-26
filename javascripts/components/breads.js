import utilities from '../helpers/utilities.js';

const breads = [
  {id:'bread1',name:'white',price: 25 },
  {id:'bread2',name:'wheat',price: 50 },
  {id:'bread3',name:'pita',price: 65 },
  {id:'bread4',name:'bun',price: 75 },
  {id:'bread5',name:'rye',price: 99 },
  ];
  
  const getSelectedBread = () => {
    const getSelectedBreads = [];
    const breadCheckboxes = document.getElementsByClassName('bread');
    for (let d = 0; d < breadCheckboxes.length; d++){
      for(let e = 0; e < breads.length; e++){
        if(breadCheckboxes[d].checked && breadCheckboxes[d].id === breads[d].id){
          getSelectedBreads.push(sandwichs[e]);
        }
      }
    }
  return getSelectedBreads;
  };
  
  const BreadPrint = () => {
    let domString2 = '<h5>Select</h5>';
    for (let f = 0; f <breads.length;f++){
      domString2 += `<div class="form-group form-check">
      <input type="checkbox" class="form-check-input bread" id="${breads[f].id}">
      <label class="form-check-label" for="${breads[f].id}">${breads[f].name}</label>
    </div>`;
    utilities.PTD('bread',domString2);
    }
  };


  export default { getSelectedBread,BreadPrint };