import React from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import Items from "./components/Items.js";

class App extends React.Component {
  state = {
    // name: undefined,
    // ostype: undefined,
    // price: undefined,
    // specs: undefined,
    // brand: undefined,
    phones: [],
  };
  componentDidMount = () => {
    this.getPhones();
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  getPhones = () => {
    axios
      .get("/smartphones")
      .then(
        (response) => this.setState({ phones: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  handleCreate = (event, newPhone) => {
    event.preventDefault();
    axios
      .post("/smartphones", newPhone)
      .then(
        (response) =>
          this.setState({
            phones: response.data,
            name: "",
            ostype: "",
            brand: "",
            price: "",
            specs: "",
            image: ""
          }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put(`/smartphones/${event.target.id}`, {
        name: this.state.name,
        ostype: this.state.ostype,
        brand: this.state.brand,
        price: this.state.price,
        specs: this.state.specs,
        image: this.state.image
      })
      .then(
        (response) => this.setState({ phones: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  handleDelete = (event) => {
    axios
      .delete("/smartphones/" + event.target.id)
      .then(
        (response) =>
          this.setState({
            phones: response.data,
            name: "",
            ostype: "",
            brand: "",
            price: "",
            specs: "",
          }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  
  render() {
    return (
      <div className="container">
        <Header />
        <Form handleCreate={this.handleCreate} />
        <Items phones = {this.state.phones} handleDelete = {this.handleDelete} handleChange = {this.handleChange} handleUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
