import React, { Component } from "react";
import Counter from "./component/Counter";
import CounterDown from "./component/CounterDown";
import "./index.css";
import Modal from "./component/Modal/Modal";
import TodoList from "./component/TodoList";

class App extends Component {
  state = {
    count: 10,
    modalIsVisible: false,
    counterIsVisible: false,
  };

  toggleModal = () => {
    this.setState({
      modalIsVisible: !this.state.modalIsVisible,
    });
  };

  toggleCounter = () => {
    this.setState({
      counterIsVisible: !this.state.counterIsVisible,
    });
  };

  render() {
    return (
      <>
        {/* modal okno otkrit zakrit  */}
        {/* {this.state.modalIsVisible && <Modal toggleModal={this.toggleModal} />}
        <button onClick={this.toggleModal}>open modal</button>*/}

        {/* knopka otkrivayet valu i zakrivayet */}
        {/* {this.state.counterIsVisible && <CounterDown />} */}
        {/* scetcik s 10 ti do 0 */}
        {this.state.counterIsVisible && <Counter />}

        <button onClick={this.toggleCounter}>
          {this.state.counterIsVisible ? "stop" : "start"}
        </button>

        <TodoList />
      </>
    );
  }
}

export default App;
