import axios from "axios";
import { Component } from "react";

class Users extends Component {
  state = {
    users: [],
    isLoading: true,
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

  getUsers = async () => {
    this.setState({
      isloading: true,
    });
  };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        params: {
          _limit: 3,
          page: this.state.page,
        },
      }
    );

    this.setState({
      users: response.data,
      isLoading: false,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("prevstate:", prevState);
    if (prevState.page !== this.state.page) {
      console.log("request to backend");
    }
  };

  render() {
    if (this.state.isLoading) {
      return <h1>...loading</h1>;
    }
    return (
      <>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li>
                <p>{user.name}</p>
              </li>
            );
          })}{" "}
          <button onClick={this.componentDidUpdate}>prevProps</button>
          <button onClick={this.componentDidUpdate}>prev</button>
        </ul>
      </>
    );
  }
}

export default Users;
