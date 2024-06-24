import React, { Component } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

export default class TodoList extends Component {
  state = {
    todos: [],
    page: 1,
  };

  incrementPage = () => {
    if (this.state.page > 10) return;
    this.setState({
      page: this.state.page + 1,
    });
  };

  decrementPage = () => {
    if (this.state.page < 2) return;
    this.setState({
      page: this.state.page - 1,
    });
  };

  componentDidUpdate = (_, prevState) => {
    if (prevState.page !== this.state.page) {
      this.getTodos();
    }
  };

  getTodos = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
      {
        params: {
          _limit: 10,
          _page: this.state.page,
        },
      }
    );

    this.setState({
      todos: response.data,
    });
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
        <button onClick={this.incrementPage}>back</button>
        <button onClick={this.decrementPage}>next</button>
      </div>
    );
  }
}
