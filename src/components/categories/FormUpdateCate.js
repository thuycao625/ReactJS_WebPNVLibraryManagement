import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class FormUpdateCate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  editCategories = (id, data) => {
    this.props.editCategories(id, data);
  };

  render() {
    const book = this.props.match;
    const book_id = book.match.params.id;
    const books = this.props.categories;
    const listBook = books.filter(item => item.id === book_id);
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="white-box">
                <h3 className="box-title">UPDATE CATEGORY</h3>
                <div className="containerTable">
                  <form
                    onSubmit={this.onSubmit}
                    className="form-horizontal form-material"
                  >
                    {listBook.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">NAME</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter book's name"
                              name="name"
                              defaultValue={item.name}
                              onChange={this.handleChange}
                            />
                          </div>

                          <NavLink
                            to={{ pathname: "/categories" }}
                            className="link"
                          >
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() =>
                                this.editCategories(item.id, this.state.value)
                              }
                            >
                              UPDATE
                            </button>
                          </NavLink>
                        </div>
                      );
                    })}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
