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
      isLoading: true,
    });

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        params: {
          _limit: 3,
          _page: this.state.page,
        },
      }
    );
    console.log("response :>> ", response);
    this.setState({
      users: response.data,
      isLoading: false,
    });
  };

  componentDidMount = async () => {
    this.getUsers();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.page !== this.state.page) {
      this.getUsers();
    }
  };

  render() {
    if (this.state.isLoading) {
      return <h1>...Loading</h1>;
    }
    return (
      <>
        <h2>Users</h2>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id}>
                <p>{user.name}</p>
              </li>
            );
          })}
        </ul>
        <button onClick={this.decrementPage}>Prev</button>
        <button onClick={this.incrementPage}>Next</button>
      </>
    );
  }
}

export default Users;
