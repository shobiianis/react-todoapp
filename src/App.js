
import './App.css';
import { useState } from 'react';

function App() {

  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);


  let addActivity = () => {
    setListData([...listData, activity]);
    setActivity("")
    console.log(listData)
  }

  let deleteTodo = (i) => {

    // console.log(i)
    let updatedList = listData.filter((item, index) => {

      return i != index;


    })

    setListData(updatedList)

  }


  let editTodo = (i) => {

    let edit = prompt("enter edit");

    listData[i] = edit;

    setListData([...listData]);
    setActivity("")


  }

  return (

    <div className="AppApp">
      <input placeholder='enter todo' value={activity} onChange={(e) => setActivity(e.target.value)} />
      <button onClick={addActivity} >show</button>

      <ul>
        {listData.map((item, i) => {
          return <li key={i}> {item} <button onClick={() => deleteTodo(i)}>deleteTodo</button>  <button onClick={() => editTodo(i)}>edit</button> </li>
        })}
      </ul>

    </div>


  );
}

export default App;
