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

  render() {
    return (
      <form>
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
