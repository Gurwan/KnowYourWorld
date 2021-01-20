import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  input = React.createRef();

  state = {
    paysFound : [],
    newPays: '',
    compteurAfrique: 0,
    compteurAmerique: 0,
    compteurAsie: 0,
    compteurEurope: 0,
    compteurOceanie: 0
  }

  hChange = (event) => {
    const v = event.currentTarget.value;
    this.setState({newPays: v});
  }

  addCountry = (event) => {
    event.preventDefault();
    const countries = this.state.paysFound.slice();
    countries.push(this.state.newPays);
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
        <p>Pays en Afrique : {this.state.compteurAfrique}/54</p>
        <p>Pays en Amérique : {this.state.compteurAmerique}/36</p>
        <p>Pays en Asie : {this.state.compteurAsie}/47</p>
        <p>Pays en Europe : {this.state.compteurEurope}/46</p>
        <p>Pays en Océanie : {this.state.compteurOceanie}/17</p>
        <ul>{this.state.paysFound.map(m => (<li>{m}</li>))}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
