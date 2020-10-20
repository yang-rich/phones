import React from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import Items from "./components/Items.js";
import Edit from "./components/Edit.js"

class App extends React.Component {
  state = {
    // name: undefined,
    // ostype: undefined,
    // price: undefined,
    // specs: undefined,
    // brand: undefined,
    phones: [],
    whichForm: true
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

  toEditForm = (event, id) =>{
    let somevar;
    console.log(this.state)
    for(let key of this.state.phones){
      console.log("key",key);
      if(id == key.id){
        somevar = key;
      }
    }
    this.setState({
      whichForm: false,
      fone: somevar
    })
  }

  toCreateForm = () =>{
    this.setState({
      whichForm: true
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.state.whichForm ?

        <Form handleCreate={this.handleCreate} />
        :
        <Edit cancel={this.toCreateForm} fone = {this.state.fone} handleUpdate={this.handleUpdate} handleChange = {this.handleChange} />

        }
        <Items phones = {this.state.phones} handleDelete = {this.handleDelete} runUpdateForm={this.toEditForm} />
      </div>
    );
  }
}

export default App;
