import React, { Component, PureComponent } from "react";
export default class TodoItem extends PureComponent {
  render() {
    return (
      <li>
        <h3>{this.props.todo.title}</h3>
        <p>
          Is Compoleted -
          {this.props.todo.completed ? "completed" : "not completed"}
        </p>{" "}
      </li>
    );
  }
}
