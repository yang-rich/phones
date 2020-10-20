import React, { Component } from "react";
class Form extends Component {
  state = {
    name: "",
    ostype: "",
    brand: "",
    price: "",
    specs: "",
    image: ""
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreate = (event) => {
    event.preventDefault();
    this.props.handleCreate(event, {
      name: this.state.name,
      ostype: this.state.ostype,
      brand: this.state.brand,
      price: this.state.price,
      specs: this.state.specs,
      image: this.state.image
    });
    // clears the form
    event.target.reset();
    // this.setState({
    //   name: "",
    //   ostype: "",
    //   brand: "",
    //   price: "",
    //   specs: "",
    //   image: ""
    // });
    // if this is the edit form, change the view back
  };
  render() {
    return (
      <form onSubmit={this.handleCreate}>
        <label>Phone Name: </label>
        <input
          type="text"
          name="name"
          // value={this.state.name}
          // defaultValue={this.state.name}
          onKeyUp={this.handleChange}
        ></input>

        <br />
        <label>Operating System: </label>
        <input type="text" name="ostype" onChange={this.handleChange}></input>
        <br />
        <label>Phone Brand: </label>
        <input type="text" name="brand" onChange={this.handleChange}></input>
        <br />
        <label>Price: $</label>
        <input type="number" name="price" onChange={this.handleChange}></input>
        <br />
        <label>Specifications and Comments: </label>
        <input type="text" name="specs" onChange={this.handleChange}></input>
        <br />
        <label>Image URL: </label>
        <input type="text" name="image" onChange={this.handleChange}></input>
        <br />
        <input className="btn btn-light" type="submit"></input>
      </form>
    );
  }
}

export default Form;
