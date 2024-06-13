import { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

class Authentication extends Component {
  state = {
    isRegister: true,
    username: "",
    password: "",
    repeatPassword: "",
  };

  toggleRegister = () => {
    this.setState({ isRegister: !this.state.isRegister });
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    console.log("username :>> ", username);
    console.log("password :>> ", password);
  };

  render() {
    if (this.state.isRegister) {
      return (
        <>
          <SignupForm
            username={this.state.username}
            password={this.state.password}
            repeatPassword={this.state.repeatPassword}
            handleSubmit={this.handleSubmit}
            handleUsernameChange={this.handleUsernameChange}
            handlePasswordChange={this.handlePasswordChange}
          />
          <button onClick={this.toggleRegister}>Open Login</button>
        </>
      );
    }
    return (
      <>
        <LoginForm
          username={this.state.username}
          password={this.state.password}
          handleSubmit={this.handleSubmit}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
        />
        <button onClick={this.toggleRegister}>Open Register</button>
      </>
    );
  }
}

export default Authentication;
