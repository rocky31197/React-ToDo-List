//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Header from "./myApp/Header";
import Footer from "./myApp/Footer";
import Todos from "./myApp/Todos";
import AddTodo from "./myApp/AddTodo";
import TodoItem from "./myApp/TodoItem";
import {About} from './myApp/About'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo
  if(localStorage.getItem("todosArr")===null){
    initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todosArr"))
  }
  const onDelete = (todo)=>{ 
    console.log("Clicked on delete", todo.sno, todo);

    setTodosArr(todosArr.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todosArr", JSON.stringify(todosArr))
  }

  const addTodo = (title, desc)=>{
      console.log("Adding ", title, desc)
      let sno; 
      if(todosArr.length===0){
        sno=1;
      }
      else{
      sno= todosArr[todosArr.length - 1].sno + 1;
      }
      const myTodo ={
        sno:sno,
        title:title,
        desc:desc
      } 
      setTodosArr([...todosArr,myTodo])
      console.log(myTodo);
  }

  const [todosArr, setTodosArr] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todosArr", JSON.stringify(todosArr))
  }, [todosArr])
  
  return (
    <> 
    <Router>
      <Header title="My Todos List"  /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todosVar={todosArr} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  
  );
}

export default App;
