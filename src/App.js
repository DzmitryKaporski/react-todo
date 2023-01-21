import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from "./componets/ColoredTile";
import Context from './Context';
import Dz from './componets/Dz'
import InputSubmit from './componets/InputSubmit';
import ListCC from "./componets/List CC";
import ListFC from "./componets/List FC";
import TitleFC from "./componets/Title FC.js";
import TitleCC from "./componets/Title CC.js";
import TodoList from './Todo/TodoList';
import AddTodo from "./Todo/AddTodo";

function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 2, completed: false, title: 'Buy oil' },
    { id: 3, completed: false, title: 'Buy milk' },
  ])

  const editTodo = (id, valueEditTodo) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: valueEditTodo } : todo
    )
    setTodos(updateTodos)
  }

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <BrowserRouter>
          <div className='App_link__margin-top-20px'>
            <Link className='App_link-color__color-toggle' to='/Dz'>React componets</Link>
          </div>
          <div className='App_link__margin-top-5px'>
            <Link className='App_link-color__color-toggle' to='/DzSecond'>Todo list</Link>
          </div>

          <Switch>
            <Route path='/Dz'>
              <hr className='main-hr-style'></hr>
              <Dz title='React componets' />
            </Route>

            <Route path='/DzSecond'>
              <hr className='main-hr-style'></hr>
              <h1 className='todoList_title'>Todo list</h1>
              <AddTodo onCreate={addTodo} />
              {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} editTodo={editTodo} /> :
                <h3 className='todoList_title'>No todos !</h3>}
            </Route>

            <Route path='/TitleFC'>
              <TitleFC title='Functional component - Title' />
            </Route>

            <Route path='/ListFC'>
              <ListFC title='Functional component - List'
                arr={['A', 'B', 'C']} isOrdered={false} />
            </Route>

            <Route path='/TitleCC'>
              <TitleCC title='Class component - Title' />
            </Route>

            <Route path='/ListCC'>
              <ListCC title='Class component - List' />
            </Route>

            <Route path='/ColoredTitle'>
              <Button
                title='Color title'
                titleButtonBlack='Black' classNameBlack='app_coloredTitle_button-color__black'
                titleButtonRed='Red' classNameRed='app_coloredTitle_button-color__red'
                titleButtonGreen='Green' classNameGreen='app_coloredTitle_button-color__green'
              />
            </Route>

            <Route path='/InputSubmit'>
              <InputSubmit />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
