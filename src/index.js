import React, { Component } from "react";
import ReactDOM from "react-dom";

const axios = require("axios");

const endpoint = "https://pokeapi.co/api/v2/pokemon/1";

function getPokemon(endpoint){
  return axios
    .get(endpoint)
    .then(function (response) {
      console.log(response)
      return response;
    })
    .catch(function (error) {
    });
}

class Pokemon extends Component {
	constructor(props) {
		super(props);

		this.state = {
      isLoading: true,
      name: null,
    }
	}

	async componentDidMount() {

    let pokemonData = await getPokemon(endpoint);

    this.state = pokemonData.data;

		console.log("======> " + pokemonData);
		console.log("======> " + JSON.stringify(this.state.species));
		console.log("======> " + this.state.species.name);
	}

	render() {
		return <h2>¡Hazte con todos!</h2>;
	}
}

ReactDOM.render(<Pokemon />, document.getElementById("root"));
