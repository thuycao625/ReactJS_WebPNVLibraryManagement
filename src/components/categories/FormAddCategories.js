import React, { Component } from "react";
import Swal from "sweetalert2";

export default class FormAddCategories extends Component {
  constructor(props) {
    super(props);
    // console.log(props.categories);

    this.state = {
      name: "",
      errors: []
    };
  }

  checkError = () => {
    const { name, errors } = this.state;
    const cate = this.props.categories;

    cate.map(item => {
      if (name === item.name) {
        errors.push(name + "  is exists!!");
      }
    });

    if (!name) {
      errors.push("Name is empty!!");
    }
    if (errors.length > 0) {
      this.setState({ errors });
      return 0;
    }
    return 1;
  };

  handleChange = event => {
    if (event.target.value) {
      this.setState({
        errors: []
      });
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addCategory = () => {
    if (this.checkError()) {
      this.props.addCategory(this.state.name);
      Swal.fire({
        title: "Success",
        text: "Do you want to continue",
        type: "success"
      });
    }
  };

  render() {
    const { name, errors } = this.state;
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>{" "}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12"> </div>
          </div>
          <div className="white-box">
            <form className="form-horizontal form-material">
              {errors.map(error => (
                <span className="label label-danger" key={error}>
                  Error: {error}
                </span>
              ))}
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Name</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter book's quantity"
                  id="addTask"
                  name="name"
                  defaultValue={name}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <button
                    type="button"
                    className="btn btn-success buttonDF"
                    onClick={this.addCategory}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
