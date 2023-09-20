import {useState} from 'react'

function App() {
  const [todo,setTodo]=useState(['todo1','tod2'])
  const [inp,setIn]=useState('');
  const [eind,setEind]=useState(0);
  function del(ind){
    todo.splice(ind,1);
    setTodo([...todo]);
  };
  function edt(ind){
    setIn(todo[eind])
    setEind(ind)
  }
  return (
    <div className="App">
    <div>Todo</div>
    <input value={inp} onChange={e=>{
      setIn(e.target.value)
    }} />
    <button onClick={()=>{ 
      setTodo([...todo,inp])
      setIn("")
    }}>add</button>
      <button onClick={()=>{ 
        todo[eind]=inp
      setTodo([...todo]);
      setIn("")
     

    }}>update</button>

  {
    todo.map((item,index)=>{
      return <div>{item}
      <button onClick={(e)=>{del(index)}}> delete </button>
       <button onClick={(e)=>{edt(index)}}> edit </button>

      </div>
    })
  }
    
    </div>
  );
}

export default App;
