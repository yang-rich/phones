import React, { Component } from "react";
class Form extends Component {
  state = {
    name: "",
    ostype: "",
    brand: "",
    price: "",
    specs: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreate = (event) => {
    event.preventDefault();
    console.log(this.state.name);
    this.props.handleCreate(event, {
      name: this.state.name,
      ostype: this.state.ostype,
      brand: this.state.brand,
      price: this.state.price,
      specs: this.state.specs,
    });
    // clears the form
    this.setState({
      name: "",
      ostype: "",
      brand: "",
      price: "",
      specs: "",
    });
    // if this is the edit form, change the view back
  };
  render() {
    return (
      <form onSubmit={this.handleCreate}>
        <label>Phone Name: </label>
        <input
          type="text"
          name="name"
          defaultValue={this.state.name}
          onKeyUp={this.handleChange}
        ></input>
        <br />
        <label>Operating System: </label>
        <input type="text" name="ostype" onKeyUp={this.handleChange}></input>
        <br />
        <label>Phone Brand: </label>
        <input type="text" name="brand" onKeyUp={this.handleChange}></input>
        <br />
        <label>Price: $</label>
        <input type="text" name="price" onKeyUp={this.handleChange}></input>
        <br />
        <label>Image URL: </label>
        <input type="text" name="specs" onKeyUp={this.handleChange}></input>
        <br />
        <input className="btn btn-light" type="submit"></input>
      </form>
    );
  }
}

export default Form;
