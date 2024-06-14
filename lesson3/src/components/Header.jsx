import React, { Component } from "react";

class Header extends Component {
  render() {
    console.log("this.props :>> ", this.props);
    return (
      <div>
        <p>Logo</p>
        <nav>
          <ul>
            <li>Main</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav>
        <div>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Header;
