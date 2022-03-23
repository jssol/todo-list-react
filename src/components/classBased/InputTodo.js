import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addTodoProps } = this.props;
    if (title.trim()) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  render() {
    const { title } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className="flex justify-between my-6 w-full"
      >
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
          className="w-full rounded-full bg-slate-100 py-2 px-4 h-10 shadow-md transition-all outline-slate-300"
        />
        <button
          type="submit"
          className="ml-3 text-sm text-center font-semibold rounded-full shadow-md text-slate-100 bg-green-600 p-2 h-10"
        >
          Submit
        </button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
