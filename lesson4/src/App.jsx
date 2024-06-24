import React, { Component } from "react";
// import ContactForm from "./component/ContactForm";
import Users from "./component/TodoList";
import Counter from "./component/Counter";
import "./index.css";
import Modal from "./component/Modal/Modal";

// import ContactBook from "./component/ContactBook";

class App extends Component {
  state = {
    count: 10,
    modalVisible: false,
    counterVisible: false,
  };

  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  toggleCounter = () => {
    this.setState({
      counterVisible: !this.state.counterVisible,
    });
  };

  render() {
    return (
      <>
        {/* <ContactBook /> */}
        {this.state.modalVisible && <Modal toggleModal={this.toggleModal} />}
        <button onClick={this.toggleModal}>open modal</button>
        {this.state.counterVisible && <Counter />}
        <button onClick={this.toggleCounter}>
          {this.state.counterVisible ? "open" : "close"}open
        </button>

        <Users />
      </>
    );
  }
}

export default App;
