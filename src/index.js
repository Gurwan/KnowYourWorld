import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  input = React.createRef();

  state = {
    paysFound : [],
    paysAfrique : [],
    paysAmerique : [],
    paysAsie : [],
    paysEuropeen: ["France","Espagne"],
    paysOceanie : [],
    newPays: '',
    compteurAfrique: 0,
    compteurAmerique: 0,
    compteurAsie: 0,
    compteurEurope: 0,
    compteurOceanie: 0
  }

  hChange = (event) => {
    const v = event.currentTarget.value;
    this.setState({newPays: v.charAt(0).toUpperCase()+v.slice(1)});
  }

  addCountry = (event) => {
    event.preventDefault();
    var countries = this.state.paysFound.slice();
    var cE = this.state.compteurEurope;

    if(this.state.paysEuropeen.includes(this.state.newPays) && !(this.state.paysFound.includes(this.state.newPays))){
      countries.push(this.state.newPays);
      this.setState({compteurEurope : cE+1});
    } 
    this.setState({paysFound : countries});
  }

  render(){

    return(
      <div>
        <h1>Countries Game</h1>
        <form onSubmit={this.addCountry}>
          <input value={this.state.newPays} onChange={this.hChange} type="text" placeholder="Entrer un pays"/>
          <button>Confirmer</button>
        </form>
        <p>Pays en Afrique : {this.state.compteurAfrique}/{this.state.paysAfrique.length}</p>
        <p>Pays en Amérique : {this.state.compteurAmerique}/{this.state.paysAmerique.length}</p>
        <p>Pays en Asie : {this.state.compteurAsie}/{this.state.paysAsie.length}</p>
        <p>Pays en Europe : {this.state.compteurEurope}/{this.state.paysEuropeen.length}</p>
        <p>Pays en Océanie : {this.state.compteurOceanie}/{this.state.paysOceanie.length}</p>
        <ul>{this.state.paysFound.map(m => (<li>{m}</li>))}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
