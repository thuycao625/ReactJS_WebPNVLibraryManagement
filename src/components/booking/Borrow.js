import React, { Component } from 'react';
import { withFirebase } from '../Firebase/context';
import { Link } from 'react-router-dom';
import Notification from '../notification/notification';
import { CONSTANTS } from '../notification/notification';
const data = [];
let count = 0;

class Borrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productsChoose: [],
      booking: [],
      user: [],
      userID: '',
      valueUser: '',
      valueBook: '',
      resultSearchProduct: [],
      productID: '',
      nameDisplay: null,
      timeout: 0,
      notificationData: null
    };
  }
  componentDidMount() {
    let products = this.props.firebase.books();
    products.on('value', snapshot => {
      const object = snapshot.val();

      if (object) {
        const objectList = Object.keys(object).map(key => ({
          ...object[key],
          id: key
        }));
        this.setState({
          products: objectList
        });
      }
    });
  }
  searchUser = event => {
    if (event.target.value) {
      let listUser = this.props.users;
      listUser = listUser.filter(item => {
        return (
          item.name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
        );
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

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    let listUser = this.props.users;

    for (let i = 0; i < listUser.length; i++) {
      if (value === listUser[i].id) {
        this.setState({
          nameDisplay: listUser[i].name
        });
      }
    }
    this.setState({
      [name]: value
    });
  };

  searchProduct = event => {
    if (event.target.value) {
      var listProduct = this.state.products;
      listProduct = listProduct.filter(item => {
        return (
          item.name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
        );
      });
      this.setState({ resultSearchProduct: listProduct });
    }
  };

  showListBook = () => {
    let { resultSearchProduct } = this.state;
    let listProduct = '';
    if (resultSearchProduct.length > 0) {
      listProduct = resultSearchProduct;
    }
    listProduct = resultSearchProduct.map((item, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>1</td>
        <td>
          <img src={item.image} width="50px" alt="" />
        </td>
        <td>
          <button
            onClick={() => this.add(index)}
            className="btn btn-success buttonDF"
          >
            Add
          </button>
        </td>
      </tr>
    ));
    return listProduct;
  };
  add = id => {
    const { resultSearchProduct } = this.state;
    count = 0;
    if (!data.length) {
      data.push({
        item: this.state.resultSearchProduct[id],
        quantity: 1
      });
    } else {
      for (let i = 0; i < data.length; i++) {
        if (data[i].item.id === resultSearchProduct[id].id) {
          count++;
          data[i].quantity += 1;
        }
      }

      if (!count) {
        data.push({
          item: this.state.resultSearchProduct[id],
          quantity: 1
        });
      }
    }

    this.setState({
      productsChoose: data,
      timeout: CONSTANTS.TIME_DISPLAY,
      notificationData: {
        title: 'Successfully!',
        description: 'The item has been added successfully!',
        type: CONSTANTS.NOTIFICATION_TYPE.SUCCESS
      }
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('object');
  };

  resultAdd = () => {
    const { selectItem } = this.state.productsChoose;
    if (selectItem) {
      const itemadd = selectItem.map((item, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>1</td>
          <td>
            <img src={item.image} width="50px" alt="" />
          </td>
          <td>
            <button onClick={() => this.add(index)} className="btn btn-primary">
              Add
            </button>
          </td>
        </tr>
      ));
      return itemadd;
    }
  };
  remove = index => {
    data.splice(index, 1);
    this.setState({
      productsChoose: data
    });
  };

  doneBooking = () => {
    const data = {
      products: this.state.productsChoose,
      userID: this.state.userID,
      status: 'borrowed',
      createAt:
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
    this.props.firebase.queryBooking().push(data);
    alert('Booking success');
  };

  dismissNotification = () => {
    this.setState({
      timeout: 0
    });
  };

  render() {
    const dataSelected = this.state.productsChoose.map(
      (productsChoose, index) => {
        const { image, name, id, quantity } = productsChoose.item;

        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{id}</td>
            <td>{quantity}</td>
            <td>
              <img src={image} width="50px" alt="" />
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => this.remove(index)}
              >
                Remove
              </button>
            </td>
          </tr>
        );
      }
    );

    let { resultSearchProduct } = this.state;

    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>
            </div>

            <form onSubmit={this.onSubmit} className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="app-search =">
                  <form className="form-inline md-form form-sm active-pink active-pink-2 mt-2">
                    <i className="fa fa-search" aria-hidden="true" />
                    {/* <label>User</label> */}
                    {this.state.nameDisplay ? (
                      <input
                        className="form-control form-control-sm ml-3 w-75"
                        name="valueBook"
                        style={{ marginTop: '0px' }}
                        type="text"
                        placeholder="Search Books .........."
                        onKeyPress={this.searchUser}
                        onChange={this.handleChange}
                        value={this.state.nameDisplay && this.state.nameDisplay}
                      />
                    ) : (
                      <input
                        className="form-control form-control-sm ml-3 w-75"
                        name="valueBook"
                        style={{ marginTop: '0px' }}
                        type="text"
                        placeholder="Search Books .........."
                        onKeyPress={this.searchUser}
                        onChange={this.handleChange}
                      />
                    )}
                  </form>
                </div>

                <div className="table-responsive">
                  <ul className="list-group">
                    {this.state.nameDisplay ? null : this.showListUser()}
                  </ul>
                </div>
              </div>

              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="app-search">
                  <form className="md-form active-cyan active-cyan-2 mb-3">
                    <i className="fa fa-search" aria-hidden="true" />
                    <input
                      style={{ marginTop: '0px' }}
                      className="form-control form-control-sm ml-3 w-75"
                      name="valueBook"
                      type="text"
                      placeholder="Search Books .........."
                      onKeyPress={this.searchProduct}
                      onChange={this.handleChange}
                      aria-label="Search"
                    />
                  </form>
                </div>
              </div>
            </form>
          </div>

          {resultSearchProduct.length > 0 && (
            <div className="row">
              <div className="col-sm-12">
                <div className="white-box">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Book ID</th>
                          <th>Book Name</th>
                          <th>Quatity</th>
                          <th>Image</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>{this.showListBook()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          {dataSelected.length > 0 && (
            <div className="row">
              <div className="col-sm-12">
                <div className="white-box">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Book ID</th>
                          <th>Book Name</th>
                          <th>Quatity</th>
                          <th>Image</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>{dataSelected}</tbody>
                    </table>
                    <Link to={{ pathname: '/booking' }}>
                      <button
                        id="buttonDF"
                        className="btn btn-success buttonDF"
                        onClick={() => this.doneBooking()}
                        style={{ marginLeft: '45%' }}
                      >
                        Done
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {this.state.timeout ? (
          <Notification
            title={this.state.notificationData.title}
            description={this.state.notificationData.description}
            timeout={this.state.timeout}
            callBack={this.dismissNotification}
            type={this.state.notificationData.type}
          />
        ) : null}
      </div>
    );
  }
}

export default withFirebase(Borrow);
