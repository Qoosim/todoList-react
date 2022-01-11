import React from 'react';
import TodoItem from './TodoItem'

class TodosList extends React.Component {
  render() {
    const todoElements = this.props.todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))

    return (
      <React.Fragment>
        {todoElements}
      </React.Fragment>
    )
  }
}

export default TodosList;
