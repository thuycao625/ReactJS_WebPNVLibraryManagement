import React, { Component } from "react";
import { withFirebase } from "../Firebase/context";
import { Link } from "react-router-dom";

class ShowBorrow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booking: []
    };
  }

  componentDidMount() {
    let listChoose = this.props.firebase.queryBooking();
    listChoose.on("value", snapshot => {
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

  done = () => {
    let idUser = this.props.match.match.url;
    const bookID = this.props.match.match.params.id;
    const data = {
      userID: idUser.substr(8, 20),
      bookID: bookID,
      quantity: 1,
      createAt:
        new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes()
    };

    this.props.firebase.queryBooking().push(data);
    console.log(data);
  };

  render() {
    let idUser = this.props.match.match.url;
    const userID = idUser.substr(8, 20);
    const user = this.props.users;
    const users = user.filter(item => item.id === userID);
    const bookID = this.props.match.match.params.id;
    const book = this.props.products;
    const books = book.filter(item => item.id === bookID);
    return (
      <div>
        <div id="page-wrapper">
          <div className="container-fluid">
            <div className="row bg-title">
              <h4 className="page-title">Basic Table</h4>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User Name</th>
                      <th>Book Name</th>
                      <th>Quatity</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {users.map((item, index) => {
                        return (
                          <>
                            <td key={index + 1}>{index + 1}</td>
                            <td key={item.id}>{item.name}</td>
                          </>
                        );
                      })}
                      {books.map((item, index) => {
                        return (
                          <>
                            <td key={item.id}>{item.name}</td>
                            <td key={index}>1</td>
                            <td>
                              {" "}
                              <img src={item.image} width="50px" alt="" />
                            </td>
                          </>
                        );
                      })}
                      <td className="link">
                        <p className="link" onClick={() => this.done()}>
                          Add to booking
                        </p>
                        &ensp; | &ensp;
                        <Link className="link" to={{ pathname: "/booking" }}>
                          Come back
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div className="white-box">
                  <h3 className="box-title">Product Table</h3>

                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>User ID</th>
                          <th>Book ID</th>
                          <th>Quatity</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.booking.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.userID}</td>
                              <td>{item.bookID}</td>
                              <td>{item.quantity}</td>
                              <td>{item.createAt}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer text-center">
              2017 © Pixel Admin brought to you by wrappixel.com{" "}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
export default withFirebase(ShowBorrow);
