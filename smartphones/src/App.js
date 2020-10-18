import React from 'react';
import axios from 'axios';


class App extends React.Component{
  state = {
    phones: []
  }
  componentDidMount = () =>{
    this.getPhones();
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
  render(){
    return (
      <div>
        <h3>Create a new smartphone listing!</h3>
        <form>
          <label>name: </label>
          <input type="text" name="name" ></input><br/>
          <label>brand: </label>
          <input type="text" name="brand"></input><br/>
          <input type="submit"></input>
        </form>

        {this.state.phones.map(fone => {
          return <div>
            <h1>{fone.name}</h1><br />
          </div>
        })}
      </div>
    )
  }
}

export default App;


