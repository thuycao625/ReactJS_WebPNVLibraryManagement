import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-static-top m-b-0"
          style={{ padding: "0px" }}
        >
          <div className="navbar-header">
            {" "}
            <div className="top-left-part">
              <div className="logo" href="/">
                Thuy Thuong
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
