import React, { Component } from 'react';
import { withFirebase } from '../Firebase/context';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: []
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
  pay = id => {
    let listProduct = this.state.booking.find(item => item.id === id);
    let idUser = listProduct.userID;
    const data = {
      products: listProduct,
      userID: idUser,
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
      this.props.firebase.queryBorrow(id).set(data);

      Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        type: 'success'
      });
    }
  };

  render() {
    const { users } = this.props;
    const { booking } = this.state;
    let listBooking = '';
    if (users.length > 0) {
      listBooking = booking
        .filter(bk => bk.status === 'borrowed')
        .map((item, index) => {
          let user = users.find(user => user.id === item.userID);
          let userName = '';
          if (user) {
            userName = user.name;
          }
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{userName}</td>
              <td>{item.status}</td>
              <td>{item.createAt}</td>
              <td className="link">
                {' '}
                <Link to={`/detailBook/${item.id}`}>Detail</Link> &ensp;
                <Link onClick={() => this.pay(item.id)}>Return</Link>
              </td>
            </tr>
          );
        });
    }
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Booking Table</h4>{' '}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              {' '}
              <Link
                className=" pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light"
                to={{ pathname: '/borrow' }}
              >
                BORROW
              </Link>
              <Link
                className="  pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light"
                to={{ pathname: '/return' }}
              >
                RETURN
              </Link>
            </div>
          </div>
          {listBooking.length > 0 && (
            <div className="row">
              <div className="col-sm-12">
                <div className="white-box">
                  <h3 className="box-title">Booking </h3>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User Name</th>
                          <th>Borrow date</th>
                          <th>Status</th>
                          <th>Detail Booking</th>
                        </tr>
                      </thead>
                      <tbody>{listBooking}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withFirebase(Booking);
