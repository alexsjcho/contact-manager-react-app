import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                name="name"
                type="text"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
            </div>
          </form>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                className="form-control form-control-lg"
                name="email"
                type="email"
                placeholder="Enter Email..."
                value={email}
                onChange={this.onChange}
              />
            </div>
          </form>
          <form>
            <div className="form-group">
              <label htmlFor="name">Phone Number</label>
              <input
                className="form-control form-control-lg"
                name="phone"
                type="text"
                placeholder="Enter Phone Number..."
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
