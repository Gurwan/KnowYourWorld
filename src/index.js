import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    paysFound : [],
    paysAfrique : ["Afrique du Sud","Algérie","Angola","Bénin","Botswana","Burkina Faso","Burundi","Cameroun","Cap-Vert","République centrafricaine","Comores","République du Congo","République démocratique du Congo","Côte d'Ivoire","Djibouti","Égypte","Érythrée","Éthiopie","Eswatini","Gabon","Gambie","Ghana","Guinée","Guinée-Bissau","Guinée équatoriale","Kenya","Lesotho","Liberia","Libye","Madagascar","Malawi","Mali","Maroc","Maurice","Mauritanie","Mozambique","Namibie","Niger","Nigeria","Ouganda","Rwanda","Sao Tomé-et-Principe","Sénégal","Seychelles","Sierra Leone","Somalie","Soudan","Soudan du Sud","Tanzanie","Tchad","Togo","Tunisie","Zambie","Zimbabwe"],
    paysAmerique : ["Antigua-et-Barbuda","Argentine","Bahamas","Barbade","Belize","Bolivie","Brésil","Canada","Chili","Colombie","Costa Rica","Cuba","République dominicaine","Dominique","Équateur","États-Unis","Grenade","Guatemala","Guyana","Haïti","Honduras","Jamaïque","Mexique","Nicaragua","Panama","Paraguay","Pérou","Porto Rico","Saint-Christophe-et-Niévès","Sainte-Lucie","Saint-Vincent-et-les-Grenadines","Salvador","Suriname","Trinité-et-Tobago","Uruguay","Venezuela"],
    paysAsie : [],
    paysEuropeen: ["France","Espagne"],
    paysOceanie : ["Australie","Fidji","Kiribati","Îles Cook","Îles Mariannes du Nord","Îles Marshall","États fédérés de Micronésie","Nauru","Niue","Nouvelle-Zélande","Palaos","Papouasie-Nouvelle-Guinée","Salomon","Samoa","Tonga","Tuvalu","Vanuatu"],
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
    var countries = this.state.paysFound.slice();
    var cE = this.state.compteurEurope;
    var cAf = this.state.compteurAfrique;
    var cAm = this.state.compteurAmerique;
    var cAs = this.state.compteurAsie;
    var cO = this.state.compteurOceanie;
    var p = this.state.newPays.toLowerCase();
    p = p.charAt(0).toUpperCase()+p.slice(1);
    p = p.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    p = p.replace("-"," ");
    p = p.replace("-"," ");
    p = p.replace("-"," ");
    p = p.replace("-"," ");
    var pE = this.state.paysEuropeen.map(function(e){
      e = e.toLowerCase();
      e = e.charAt(0).toUpperCase()+e.slice(1);
      e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      e = e.replace("-"," ");
      e = e.replace("-"," ");
      e = e.replace("-"," ");
      e = e.replace("-"," ");
      return e;
    });
    var pAf = this.state.paysAfrique.map(function(a){
      a = a.toLowerCase();
      a = a.charAt(0).toUpperCase()+a.slice(1);
      a = a.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      return a;
    });
    var pAm = this.state.paysAmerique.map(function(a){
      a = a.toLowerCase();
      a = a.charAt(0).toUpperCase()+a.slice(1);
      a = a.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      return a;
    });
    var pAs = this.state.paysAsie.map(function(a){
      a = a.toLowerCase();
      a = a.charAt(0).toUpperCase()+a.slice(1);
      a = a.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      a = a.replace("-"," ");
      return a;
    });
    var pO = this.state.paysOceanie.map(function(o){
      o = o.toLowerCase();
      o = o.charAt(0).toUpperCase()+o.slice(1);
      o = o.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      o = o.replace("-"," ");
      o = o.replace("-"," ");
      o = o.replace("-"," ");
      o = o.replace("-"," ");
      return o;
    });

    if(pE.includes(p) && !(this.state.paysFound.includes(this.state.paysEuropeen[pE.indexOf(p)]))){
      countries.push(this.state.paysEuropeen[pE.indexOf(p)]);
      this.setState({compteurEurope : cE+1});
    } else if(pAf.includes(p) && !(this.state.paysFound.includes(this.state.paysAfrique[pAf.indexOf(p)]))){
      countries.push(this.state.paysAfrique[pAf.indexOf(p)]);
      this.setState({compteurAfrique : cAf+1});
    } else if(pAm.includes(p) && !(this.state.paysFound.includes(this.state.paysAmerique[pAm.indexOf(p)]))){
      countries.push(this.state.paysAmerique[pAm.indexOf(p)]);
      this.setState({compteurAmerique : cAm+1});
    } else if(pAs.includes(p) && !(this.state.paysFound.includes(this.state.paysAsie[pAs.indexOf(p)]))){
      countries.push(this.state.paysAsie[pAs.indexOf(p)]);
      this.setState({compteurAsie : cAs+1});
    } else if(pO.includes(p) && !(this.state.paysFound.includes(this.state.paysOceanie[pO.indexOf(p)]))){
      countries.push(this.state.paysOceanie[pO.indexOf(p)]);
      this.setState({compteurOceanie : cO+1});
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
