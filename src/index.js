import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class Pokemon extends Component {
  constructor(props){
    
    super(props)

    this.state = 
      axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  }

  componentDidMount(){
    console.log("=>>>>" + this.state)
  }

  render() {
    return (
      <h2>¡Hazte con todos!</h2>
      
    )
  }
}

ReactDOM.render(
  <Pokemon />,
  document.getElementById('root')
);