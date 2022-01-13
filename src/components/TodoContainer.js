import React from 'react'
import TodosList from './TodosList'
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

class TodoContainer extends React.Component {
  state = {
      todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false
      }
      ]
  };

  // Handle toggling of checkbox
  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      }),
    }))
  }

  // Handles deleting todo task
  deleteTodo = id => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos.filter(todo => todo.id !== id)
      ]
    }))
  }

  addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo 
            addTodoProps={this.addTodoItem}
          />
          <TodosList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
