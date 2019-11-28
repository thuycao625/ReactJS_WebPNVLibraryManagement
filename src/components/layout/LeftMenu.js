import React from "react";
import { NavLink } from "react-router-dom";
class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse slimscrollsidebar">
          <ul className="nav" id="side-menu">
            <li style={{ padding: "10px 0 0" }}>
              <a href="/" className="waves-effect">
                <i className="fa fa-clock-o fa-fw" aria-hidden="true" />
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li>
              <NavLink to={{ pathname: "/users" }} className="link">
                <i className="fa fa-user fa-fw" aria-hidden="true" />
                <span className="hide-menu">USERS</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/categories" }} className="link">
                <i className="fa fa-table fa-fw" aria-hidden="true" />
                <span className="hide-menu">CATEGORIES</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/books" }} className="link">
                <i className="fa fa-book fa-fw" aria-hidden="true" />
                <span className="hide-menu">BOOKS</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={{ pathname: "/booking" }} className="link">
                <i className="fa fa-cart-plus fa-fw" aria-hidden="true" />
                <span className="hide-menu">BOOKING</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
