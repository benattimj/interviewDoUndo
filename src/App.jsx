import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState ([]);


  const [undid, setUndid] = useState ([]);

  const handleClick = (event) => {
   
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY,

    }

    console.log(newDot);
    setList((prev) => [...prev, newDot]);
  };

const handleUndo = (event) => {
  event.stopPropagation();
  console.log('undo');

if (list.length === 0){
  return;
}

const lastItem = list[list.length -1];
setUndid((prev) => [...prev,lastItem]);

setList((prev) => {
  const newArr = [...prev].slice(0,-1);
   return newArr;
});

};

const handleRedo = (event) => {
  event.stopPropagation();
 
  if (list.length === 0){
    return;
  }

const recoverDot = undid[undid.length -1];


setList((prev) => {
   const newArr = [...prev].slice(0,-1);
  return newArr;
});
  setList((prev) => [...prev, recoverDot]);
};

  return (
    
   <div id='page' onClick={handleClick}>
    <button onClick={handleUndo}>Desfazer</button>
    
    <button onClick={handleRedo}>Refazer</button>
  {list.map(item => (
     <span className='dot'
         style={{left: item.clientX, top: item.clientY}} />
     
     ))}
</div>
  
) ;

}

export default App;
