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

// sama rewila 2oy sposob
// import React, { Component } from "react";

// export default class Product extends Component {
//   state = {
//     value: 0,
//     active: true,
//   };

//   minus = () => {
//     this.setState({
//       value: this.state.value - 1,
//       active: (this.state.active = false),
//     });
//   };

//   plus = () => {
//     this.setState({
//       value: this.state.value + 1,
//       active: (this.state.active = true),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>{this.state.value}</h2>
//         {this.state.active == true ? (
//           <p> uvelicivayetsya</p>
//         ) : (
//           <p>umenshayetysa </p>
//         )}

//         <button onClick={this.plus}>+</button>
//         <button onClick={this.minus}>-</button>
//       </div>
//     );
//   }
// }
