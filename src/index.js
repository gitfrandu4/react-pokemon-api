import React, { Component } from "react";
import ReactDOM from "react-dom";

// const axios = require("axios");

const endpoint = "https://pokeapi.co/api/v2/pokemon/1";

// function getPokemon(endpoint){
//   return axios
//     .get(endpoint)
//     .then(function (response) {
//       // console.log(response)
//       return response.data;
//     })
//     .catch(function (error) {
//     });
// }

class Pokemon extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			pokemon: null,
		};
	}

	async componentDidMount() {
		// let pokemonData = await getPokemon(endpoint);
		const response = await fetch(endpoint);
		const data = await response.json();

		console.log(data);
		this.setState({
			isLoading: false,
			pokemon: {
				name: data.name,
				avatar: data.sprites.front_shiny,
			},
		});
	}

	render() {
		if (this.state.isLoading === true) {
			return <h2>Loading...</h2>;
		}

		return (
			<div>
				<h2>{this.state.pokemon.name}</h2>
				<img src={this.state.pokemon.avatar} alt="foto pokemon" />
			</div>
		);
	}
}

ReactDOM.render(<Pokemon />, document.getElementById("root"));
