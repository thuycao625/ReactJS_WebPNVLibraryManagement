import React, { Component } from 'react';
import { withFirebase } from '../Firebase/context';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
class Return extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      userID: '',
      booking: [],
      paying: [],
      productChoosePay: []
    };
  }
  componentDidMount() {
    let listChoose = this.props.firebase.queryBooking();
    listChoose.on('value', snapshot => {
      const object = snapshot.val();
      if (object) {
        const objectList = Object.keys(object).map(key => ({
          ...object[key],
          id: key
        }));

        this.setState({
          booking: objectList
        });
      }
    });
  }

  searchUser = event => {
    if (event.target.value) {
      var listUser = this.props.users;
      listUser = listUser.filter(item => {
        return item.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      this.setState({ user: listUser });
    }
  };
  showListUser = () => {
    const { user } = this.state;
    if (user) {
      const listUserSearch = user.map(item => (
        <li className="list-group-item" key={item.id}>
          <input
            type="radio"
            name="userID"
            onChange={this.handleChange}
            value={item.id}
          />
          {item.name}
        </li>
      ));
      return listUserSearch;
    }
  };
  showListProduct = () => {
    let idUser = this.state.userID;
    const { booking } = this.state;
    let listUser = '';
    if (booking.length > 0) {
      listUser = booking.filter(
        item =>
          item.userID === idUser && item.status.toLowerCase() === 'borrowed'
      );

      let listProduct = listUser.map(item =>
        item.products.find(it => it.item.id)
      );
      let showList = listProduct.map((product, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{product.item.name}</td>
            <td>{product.item.type}</td>
            <td>
              <img className="" src={product.item.image} width="50px" alt="" />
            </td>
          </tr>
        );
      });
      return showList;
    }
    return '';
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
  };

  done = () => {
    let list = this.state.booking.filter(
      item => item.userID === this.state.userID
    );
    let a = list.map(item => item.id);
    const data = {
      products: list,
      userID: this.state.userID,
      status: 'returned',
      returnDate:
        new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate() +
        ' ' +
        new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds()
    };
    let comfirm = window.confirm(
      'Are you sure you wish to return this books ?'
    );
    if (comfirm) {
      this.props.firebase.queryBorrow(a).set(data);

      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        type: 'success'
      });
    }
  };

  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>
            </div>

            <div className="row">
              <div className="app-search">
                <form
                  onSubmit={this.onSubmit}
                  className="md-form active-cyan active-cyan-2 mb-3"
                >
                  <i className="fa fa-search" aria-hidden="true" />
                  <input
                    style={{ marginTop: '0px' }}
                    className="form-control form-control-sm ml-3 w-75"
                    name="valueBook"
                    type="text"
                    placeholder="Search Users .........."
                    onKeyPress={this.searchUser}
                    onChange={this.handleChange}
                    aria-label="Search"
                  />
                </form>
              </div>

              <div className="table-responsive">
                <ul className="list-group">{this.showListUser()}</ul>
              </div>
            </div>
          </div>
          {this.showListProduct().length > 0 && (
            <>
              <div className="row">
                <div className="col-sm-12">
                  <div className="white-box">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Book Name</th>
                            <th>Book Type</th>
                            <th>Image</th>
                          </tr>
                        </thead>
                        <tbody>{this.showListProduct()}</tbody>
                      </table>

                      <NavLink to={{ pathname: '/booking' }} className="link">
                        <button
                          className="btn btn-success buttonDF"
                          onClick={() => this.done()}
                          style={{ marginLeft: '45%' }}
                        >
                          Return
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <footer className="footer text-center">
          {' '}
          thuongthuy@gmail.com || (+84) 856 244 358{' '}
        </footer>
      </div>
    );
  }
}
export default withFirebase(Return);
