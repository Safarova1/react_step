import { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="username">Enter your username</label>
        <input
          type="text"
          name="username"
          onChange={this.props.handleUsernameChange}
          value={this.props.username}
        />
        <label>Enter your password</label>
        <input
          type="text"
          name="password"
          onChange={this.props.handlePasswordChange}
          value={this.props.password}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
