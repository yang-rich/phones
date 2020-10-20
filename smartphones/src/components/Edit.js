import React, {Component} from "react";

class Items extends Component {
    state = {

    }

    render (){
        const {handleUpdate, fone, handleChange, cancel} = this.props;
        return(
            <div>
              <h2>Edit This Phone: {fone.name}</h2>
                <form id={fone.id} onSubmit={handleUpdate}>
                    <label>Name: </label>
                    <input type="text" name={"name"} defaultValue={fone.name} onChange={handleChange}>
                    </input>
                        <br />
                          <label>OS Type: </label>
                    <input
                            type="text"
                            name={"ostype"}
                            defaultValue={fone.ostype}
                            onChange={handleChange}
                          ></input>
                          <br />
                          <label>Brand: </label>
                    <input
                            type="text"
                            name={"brand"}
                            defaultValue={fone.brand}
                            onChange={handleChange}
                          ></input>
                          <br />
                          <label>Price:</label>
                          <input
                            type="number"
                            name={"price"}
                            defaultValue={fone.price}
                            onChange={handleChange}
                          ></input>
                          <br />
                          <label>Specifications and Comments: </label>
                          <input
                            type="text"
                            name={"specs"}
                            defaultValue={fone.specs}
                            onChange={handleChange}
                          ></input>
                          <br />
                          <label>Image URL: </label>
                          <input
                            type="text"
                            name={"image"}
                            defaultValue={fone.image}
                            onChange={handleChange}
                          ></input>
                          <br />
                          <input className="btn btn-dark" type="submit"></input>
                </form>
                <button onClick={cancel}>Cancel</button>
            </div>
        )
    }
}

export default Items;