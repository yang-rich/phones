import React, {Component} from "react";

class Items extends Component {
    state = {
      // phones: this.props.phones
    }

    runUpdateForm = (event) =>{
      console.log(event.target.getAttribute('id'));
      let did = event.target.getAttribute('id');
      this.props.runUpdateForm(event, did);
    }

    render () {
      const { phones, handleDelete} = this.props;
        return (
            <div>
              <ul className="list-group">
                {phones.map((fone) => {
                  return (
                    <li className="list-group-item" key={fone.id}>
                      <div className="d-flex w-100 justify-content-between">
                        <h1 className="mb-1">{fone.name}</h1>
                        <small>${fone.price}</small>
                      </div>
                      <p>
                        made by {fone.brand} and runs on {fone.ostype}
                      </p>
                      <img
                        className="rounded mx-auto d-block"
                        src={fone.image}
                        alt={fone.image}
                      />
                      <button id={fone.id} onClick={this.runUpdateForm}>Edit</button>
                      <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                        id={fone.id}
                      >
                        DELETE
                      </button>
                      <br />
                    </li>
                  );
                })}
              </ul>
            </div>
        )
    }
}

export default Items;