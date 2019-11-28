import React, { Component } from 'react';
import { withFirebase } from '../Firebase/context';

class ShowDetail extends Component {
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

  render() {
    let list = this.state.booking.filter(
      item => item.id === this.props.match.match.params.id
    );
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12" />
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="white-box">
                <h3 className="box-title">User Table</h3>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>BOOK ID</th>
                        <th>BOOK NAME</th>
                        <th>TYPE</th>
                        <th>IMAGE</th>
                      </tr>
                    </thead>

                    {list.map((item, index) => {
                      return (
                        <tbody>
                          {item.products.map((product, index) => {
                            return (
                              <tr>
                                <td>{index + 1}</td>

                                <td>{product.item.id}</td>
                                <td>{product.item.name}</td>
                                <td>{product.item.type}</td>

                                <td>
                                  <img
                                    className=""
                                    src={product.item.image}
                                    width="50px"
                                    alt=""
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withFirebase(ShowDetail);
