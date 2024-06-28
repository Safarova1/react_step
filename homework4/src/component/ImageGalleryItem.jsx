import React, { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    const { src, alt, onClick } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={onClick}>
        <img src={src} alt={alt} className="ImageGalleryItem-image" />
      </li>
    );
  }
}

export default ImageGalleryItem;
