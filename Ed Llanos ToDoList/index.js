function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Understand what coding is',
      isCompleted: false,
    },
    {
      text: 'Understand how coding can help you',
      isCompleted: false,
    },
    {
      text: 'Pick your path',
      isCompleted: false,
    },
    {
      text: 'Pick your course',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
