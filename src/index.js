import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Countries Game</h1>
        <form>
          <input type="text" placeholder="Entrer un pays"/>
          <button>Confirmer</button>
        </form>
        <p>Pays en Afrique : 0/54</p>
        <p>Pays en Amérique : 0/36</p>
        <p>Pays en Asie : 0/47</p>
        <p>Pays en Europe : 0/46</p>
        <p>Pays en Océanie : 0/17</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
