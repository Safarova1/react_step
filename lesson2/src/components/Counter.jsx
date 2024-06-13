import React from "react";
import Card from "./Card";

class Counter extends React.Component {
  state = {
    value: 0,
    toggle: false,
  };

  toggletruefalse = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 }, () => {
      setTimeout(() => {
        alert("State Has changed");
      }, 2000);
    });
  };

  render() {
    return (
      <Card>
        <h2>
          Value - <span>{this.state.value}</span>
        </h2>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
        <button onClick={this.toggletruefalse}>Переключатель</button>
        {this.state.toggle ? <p>Open</p> : <p>Close</p>}
      </Card>
    );
  }
}

export default Counter;

// Создать компонент Toggle
// который будет иметь булевое состояние
// Добавить кнопку для переклюения состояния
// показывать компонент с текстом 'Modal Open' в зависимости от состояния
