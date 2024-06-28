import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt, onClose } = this.props;
    return (
      <div className="Overlay" onClick={onClose}>
        <div className="Modal">
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}
