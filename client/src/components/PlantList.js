import React, { Component } from "react";
import axios from "axios";

export default class PlantList extends Component {
  // add state with a property called "plants" - initialize as an empty array
  constructor() {
    console.log("constructor is invoked");
    super();
    this.state = {
      plants: []
    }
  }

  // when the component mounts:
  //   - fetch data from the server endpoint - http://localhost:3333/plants
  //   - set the returned plants array to this.state.plants

    componentDidMount() {
      console.log("CDM is invoked");
      axios
      .get("http://localhost:3333/plants")
      .then((res) => {
        this.setState({plants: res.data.plantsData});
        console.log("This is the response:", this.state.plants)
      })
      .catch((err) => console.log("This is the Error:", err))
    };

    // This is invoked inmediately after the component is  updating 
    componentDidUpdate(prepvProps, prevState) {
      console.log("CDU is invoked")
      if (prevState.plants !== this.state.plants) {
        console.log("Plants State has changed");
      }
    }

  /*********  DON'T CHANGE ANYTHING IN THE RENDER FUNCTION *********/
  render() {
    console.log("Render is called")
    return (
      <main className="plant-list">
        {this.state?.plants?.map((plant) => (
          <div className="plant-card" key={plant.id}>
            <img className="plant-image" src={plant.img} alt={plant.name} />
            <div className="plant-details">
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-scientific-name">{plant.scientificName}</p>
              <p>{plant.description}</p>
              <div className="plant-bottom-row">
                <p>${plant.price}</p>
                <p>☀️ {plant.light}</p>
                <p>💦 {plant.watering}x/month</p>
              </div>
              <button
                className="plant-button"
                onClick={() => this.props.addToCart(plant)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </main>
    );
  }
}
