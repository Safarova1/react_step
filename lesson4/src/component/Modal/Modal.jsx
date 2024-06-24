import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component {
  componentDidMount = () => {
    console.log("did mount from modal");
  };

  componentWillUnmount = () => {
    console.log("Modal close");
  };
  render() {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Hello from Modal</h2>
          <button onClick={this.props.toggleModal} className="modal-close">
            X
          </button>
        </div>
      </div>
    );
  }
}
