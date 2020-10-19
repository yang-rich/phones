import React from 'react';
import axios from 'axios';


class App extends React.Component{
  state = {
    // name: undefined,
    // ostype: undefined,
    // price: undefined,
    // specs: undefined,
    // brand: undefined,
    phones: []
  }
  componentDidMount = () =>{
    this.getPhones();
  }
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  getPhones = () =>{
    axios
    .get("/smartphones")
    .then(
      (response) => this.setState({ phones: response.data }),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error));
  }
  handleCreate = (event) =>{
    event.preventDefault();
    axios
    .post("/smartphones", 
      {
        name: this.state.name,
        ostype: this.state.ostype,
        brand: this.state.brand,
        price: this.state.price,
        specs: this.state.specs
      }
    )
    .then(
      (response) => this.setState({ phones: response.data }),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error));
  }
  handleUpdate = (event) =>{
    event.preventDefault();
    // console.log(event.target.id)
    axios
    .put(`/smartphones/${event.target.id}`, 
      {
        name: this.state.name,
        ostype: this.state.ostype,
        brand: this.state.brand,
        price: this.state.price,
        specs: this.state.specs
      }
    )
    .then(
      (response) => this.setState({ phones: response.data }),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error));
  }
  handleDelete = (event) =>{
    // console.log(event.target.id);
    axios
    .delete("/smartphones/" + event.target.id)
    .then(
      (response) => this.setState({ phones: response.data }),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error));
  }
  render(){
    return (
      <div className = "container">
        <h3>Create a new smartphone listing!</h3>
        <form onSubmit={this.handleCreate}>
          <label>Phone Name: </label>
          <input type="text" name={"name"} onKeyUp={this.handleChange}></input><br/>
          <label>Operating System: </label>
          <input type="text" name={"ostype"} onKeyUp={this.handleChange}></input><br/>
          <label>Phone Brand: </label>
          <input type="text" name={"brand"} onKeyUp={this.handleChange}></input><br/>
          <label>Price: $</label>
          <input type="text" name={"price"} onKeyUp={this.handleChange}></input><br/>
          <label>Image URL: </label>
          <input type="text" name={"specs"} onKeyUp={this.handleChange}></input><br/>
          <input className="btn btn-light" type="submit"></input>
        </form><br/><br/><br/>

        <ul className="list-group">
        {this.state.phones.map(fone => {
          return <li className="list-group-item" key = {fone.id}>
            <div className="d-flex w-100 justify-content-between">
              <h1 className="mb-1">{fone.name}</h1>
              <small>${fone.price}</small>
            </div>
            <p>made by {fone.brand} and runs on {fone.ostype}</p>
            <img className="rounded mx-auto d-block" src={fone.specs} alt={fone.specs}/>
            <details>
              <summary>Edit</summary>
              <form id={fone.id} onSubmit={this.handleUpdate}>
                <label>Name: </label>
                <input type="text" name={"name"} defaultValue = {fone.name} onKeyUp={this.handleChange}></input><br/>
                <label>OS Type: </label>
                <input type="text" name={"ostype"} defaultValue = {fone.ostype} onKeyUp={this.handleChange}></input><br/>
                <label>Brand: </label>
                <input type="text" name={"brand"} defaultValue = {fone.brand} onKeyUp={this.handleChange}></input><br/>
                <label>Price:</label>
                <input type="text" name={"price"} defaultValue = {fone.price} onKeyUp={this.handleChange}></input><br/>
                <label>Image URL: </label>
                <input type="text" name={"specs"} defaultValue = {fone.specs} onKeyUp={this.handleChange}></input><br/>
                <input className="btn btn-dark" type="submit"></input>
              </form>
            </details>
            <button className="btn btn-danger" onClick={this.handleDelete} id={fone.id}>DELETE</button><br />
          </li>
        })}
        </ul>
      </div>
    )
  }
}

export default App;


