import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./component/Searchbar";
import ImageGallery from "./component/ImageGallery";
import ImageGalleryItem from "./component/ImageGalleryItem";
import Button from "./component/Button";
import Loader from "./component/Loader";
import Modal from "./component/Modal/Modal";
import "./index.css";

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: "",
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const url = `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${"32794652-bfa07cdff6071d0274c855e1e"}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    axios
      .get(url)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => {
        this.setState({ error: "Error fetching data" });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleSubmit = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, images: [] }, () => {
      this.fetchImages();
    });
  };

  openModal = (largeImageURL) => {
    this.setState({ showModal: true, largeImageURL });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: "" });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              alt={image.tags}
              onClick={() => this.openModal(image.largeImageURL)}
            />
          ))}
        </ImageGallery>
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            src={largeImageURL}
            alt="Large Image"
            onClose={this.closeModal}
          />
        )}
        <Button onClick={this.fetchImages} disabled={isLoading} />
      </div>
    );
  }
}

export default App;
