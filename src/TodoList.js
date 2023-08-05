import React from 'react';
import { useState } from 'react';

export default function TodoList() {
    const [Activity , setActivity] = useState ("");
    const [listData, setlistData] = useState([]);
    function addActivity(){
        setlistData((listData)=>{
            const updatedList = [...listData,Activity]//appenda Activity in listData array
            console.log(updatedList)
            setActivity('');
            return updatedList
        })
    }
    function removeActivity(i){
         const updatedListData = listData.filter((elem,id)=>{
            return i!=id;
         })
         setlistData(updatedListData);
    }
    function RemoveAll(){
        setlistData([])
    }
  return (
    <div>
      <h1>TODO LIST</h1>
      <input type="text" placeholder="Enter Todo" value={Activity} onChange={(e)=>setActivity(e.target.value)} />
      <button onClick={addActivity}>Add</button>
      <p > Here is your List:{")"}</p>
      {listData!=[] && listData.map((data,i)=>{
        return(
            <>
            <p key={i}>
                <div>{data}</div>
                <button onClick={()=>removeActivity(i)}>remove</button>
                
            </p>
            
            </>
        )
      })}
      {listData.length>=1 && <button onClick={()=>RemoveAll()}>Remove All</button>}
    </div>
  )
}
