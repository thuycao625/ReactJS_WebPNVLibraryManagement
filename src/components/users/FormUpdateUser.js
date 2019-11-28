import React, { Component } from 'react';
import { withFirebase } from '../Firebase/context';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

class FormUpdateUser extends Component {
  constructor(props) {
    super(props);
    const book_id = this.props.match.match.params.id;
    const books = this.props.users;
    let book = {};
    if (books.length > 0 && books) {
      book = books.find(item => item.id === String(book_id));
    }
    this.state = {
      value: book,
      data: [],
      arrClass: ['PNV20A', 'PNV20B', 'PNV19A', 'PNV19B', 'PNV21A', 'PNV21B']
    };
    console.log(props);
  }
  handleImage = e => {
    e.preventDefault();
    if (e.target.files[0]) {
      const image = e.target.files[0];

      this.setState(() => ({ image }));
    }
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState(prevState => ({
      ...prevState,
      value: {
        ...prevState.value,
        [name]: value
      }
    }));
  };

  editUser = e => {
    e.preventDefault();
    this.handleUpload();
    Swal.fire({
      title: 'Success',
      text: 'Do you want to continue',
      type: 'success'
    });
  };

  handleUpload = () => {
    const { image } = this.state;
    if (image) {
      const uploadTask = this.props.firebase.storage
        .ref(`images/${image.name}`)
        .put(image);
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          console.log(error);
        },
        () => {
          this.props.firebase.storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.props.editUser(this.state.value.id, {
                value: this.state.value,
                image: url
              });
            });
        }
      );
    }
    this.props.editUser(this.state.value.id, {
      value: this.state.value
    });
  };

  render() {
    let user = this.state.value;
    const classes = this.state.arrClass;

    return (
      <div id="page-wrapper">
        <div className="container-fluid">
          <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
              <h4 className="page-title">Basic Table</h4>{' '}
            </div>
            <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12"> </div>
          </div>
          <div className="white-box">
            <form className="form-horizontal form-material">
              <div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">NAME</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's quantity"
                    name="name"
                    defaultValue={user.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">AGE</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter book's quantity"
                    name="age"
                    defaultValue={user.age}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">PHONE</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter book's quantity"
                    name="phone"
                    defaultValue={user.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">CLASS</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    name="type"
                    defaultValue={user.classes}
                    onChange={this.handleChange}
                  >
                    {classes.map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">IMAGE</label>
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="file"
                        className="form-control-file"
                        name="img"
                        // defaultValue={user.img}
                        onChange={this.handleImage}
                      />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <img
                        width="100px"
                        src={user.image}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-sm-12">
                    <Link to={{ pathname: '/users' }} className="link">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={this.editUser}
                      >
                        UPDATE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withFirebase(FormUpdateUser);
