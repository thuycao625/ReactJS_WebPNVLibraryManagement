import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
export default class CategoriesList extends Component {
  deleteCategory = id => {
    this.props.deleteCategory(id);
  };
  render() {
    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Category Table</h4>{' '}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
              <NavLink
                to={{ pathname: '/addCategory' }}
                className="btn btn-success buttonDF pull-right"
              >
                ADD
              </NavLink>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <div className="white-box">
                <h3 className="box-title">Category Table</h3>

                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>NAME </th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.categories.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>

                            <td className="link">
                              <Link
                                onClick={() => this.deleteCategory(item.id)}
                              >
                                Xóa
                              </Link>
                              &ensp;
                              <Link
                                className="link"
                                to={`/updateCategory/${item.id}`}
                              >
                                Sửa
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer text-center">
          {' '}
          thuongthuy@gmail.com || (+84) 856 244 358{' '}
        </footer>
      </div>
    );
  }
}
