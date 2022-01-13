import React from 'react';

class InputTodo extends React.Component {
  state = {
    title: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: ''
      })
    } else {
      alert('Please write item');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add todo..." 
          value={this.state.title}
          name='title'
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo;
