import React from "react";

class Edit extends Component {
    state = {

    }

    render () {
        return (
            <div>
                <form id={fone.id} onSubmit={this.handleUpdate}>
                    <label>Name: </label>
                    <input
                      type="text"
                      name={"name"}
                      defaultValue={fone.name}
                      onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>OS Type: </label>
                    <input
                      type="text"
                      name={"ostype"}
                      defaultValue={fone.ostype}
                      onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Brand: </label>
                    <input
                      type="text"
                      name={"brand"}
                      defaultValue={fone.brand}
                      onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Price:</label>
                    <input
                      type="number"
                      name={"price"}
                      defaultValue={fone.price}
                      onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Specifications and Comments: </label>
                    <input
                      type="text"
                      name={"specs"}
                      defaultValue={fone.specs}
                      onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Image URL: </label>
                    <input
                      type="text"
                      name={"image"}
                      defaultValue={fone.image}
                      onChange={this.handleChange}
                    ></input>
                    <br />
                    <input className="btn btn-dark" type="submit"></input>
                  </form>
            </div>
        )
    }
}

export default Edit;