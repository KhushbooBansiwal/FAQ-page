import { useState } from "react";
import data from "../data";
import './style.css'

export default function Accordian (){
  const [selected, setSelected] = useState(null);
   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
   const [multiple,setMultiple] = useState([]);

  function handleSingleSelection(getcurrentId) {
    // console.log(getcurrentId);
    setSelected(getcurrentId === selected ? null : getcurrentId);
  }
  function handleMultiSelection(getcurrentId){
let cpyMultiple =[...multiple];
const findIndexofCurrentId = cpyMultiple.indexOf(getcurrentId)
console.log(findIndexofCurrentId);
if(findIndexofCurrentId === -1) cpyMultiple.push(getcurrentId)
    else cpyMultiple.splice(findIndexofCurrentId, 1)

setMultiple(cpyMultiple)
  }
   console.log(selected, multiple);
    return <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(! enableMultiSelection)}>
            Discover UPI Insights</button>
        <div className="accordion">
            {data && data.length > 0 ? 
                data.map(dataItem =><div className="item">
                    <div
                     onClick ={ 
                        enableMultiSelection 
                        ? () => handleMultiSelection(dataItem.id)
                        : () =>handleSingleSelection(dataItem.id)
                    }
                        className="title"
                        >
                        <h3>{dataItem.Question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection ?
                        multiple.indexOf(dataItem.id) !== -1 &&
                        <div className="content">{dataItem.answer}</div> :
                        selected === dataItem.id &&  <div className="content">{dataItem.answer}</div> 
                     }
                </div>
                )
            : ( 
            <div>No data found!</div>
            )}
        </div>
    </div>;
}
