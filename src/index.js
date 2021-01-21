import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  state = {
    paysFound : [],
    paysFoundAf : [],
    paysFoundAm : [],
    paysFoundAs : [],
    paysFoundEu : [],
    paysFoundOc : [],
    paysAfrique : ["Afrique du Sud","Algérie","Angola","Bénin","Botswana","Burkina Faso","Burundi","Cameroun","Cap-Vert","République centrafricaine","Comores","République du Congo","République démocratique du Congo","Côte d'Ivoire","Djibouti","Égypte","Érythrée","Éthiopie","Eswatini","Gabon","Gambie","Ghana","Guinée","Guinée-Bissau","Guinée équatoriale","Kenya","Lesotho","Liberia","Libye","Madagascar","Malawi","Mali","Maroc","Maurice","Mauritanie","Mozambique","Namibie","Niger","Nigeria","Ouganda","Rwanda","Sao Tomé-et-Principe","Sénégal","Seychelles","Sierra Leone","Somalie","Soudan","Soudan du Sud","Tanzanie","Tchad","Togo","Tunisie","Zambie","Zimbabwe"],
    paysAmerique : ["Antigua-et-Barbuda","Argentine","Bahamas","Barbade","Belize","Bolivie","Brésil","Canada","Chili","Colombie","Costa Rica","Cuba","République dominicaine","Dominique","Équateur","États-Unis","Grenade","Guatemala","Guyana","Haïti","Honduras","Jamaïque","Mexique","Nicaragua","Panama","Paraguay","Pérou","Porto Rico","Saint-Christophe-et-Niévès","Sainte-Lucie","Saint-Vincent-et-les-Grenadines","Salvador","Suriname","Trinité-et-Tobago","Uruguay","Venezuela"],
    paysAsie : ["Afghanistan","Arabie saoudite","Arménie","Azerbaïdjan","Bahreïn","Bangladesh","Bhoutan","Birmanie","Brunei","Cambodge","Chine","Corée du Nord","Corée du Sud","Émirats arabes unis","Géorgie","Inde","Indonésie","Irak","Iran","Israël","Japon","Jordanie","Kazakhstan","Kirghizistan","Koweït","Laos","Liban","Malaisie","Maldives","Mongolie","Népal","Oman","Ouzbékistan","Pakistan","Palestine","Philippines","Qatar","Russie","Singapour","Sri Lanka","Syrie","Taïwan","Tadjikistan","Thaïlande","Timor oriental","Turkménistan","Turquie","Viêtnam","Yémen"],
    paysEuropeen: ["Albanie","Allemagne","Andorre","Autriche","Belgique","Biélorussie","Bosnie-Herzégovine","Bulgarie","Chypre","Croatie","Danemark","Espagne","Estonie","Finlande","France","Grèce","Hongrie","Irlande","Islande","Italie","Kosovo","Lettonie","Liechtenstein","Lituanie","Luxembourg","Macédoine du Nord","Malte","Moldavie","Monaco","Monténégro","Norvège","Pays-Bas","Pologne","Portugal","République tchèque","Roumanie","Royaume-Uni","Russie","Saint-Marin","Serbie","Slovaquie","Slovénie","Suède","Suisse","Ukraine","Vatican"],
    paysOceanie : ["Australie","Fidji","Kiribati","Îles Cook","Îles Mariannes du Nord","Îles Marshall","États fédérés de Micronésie","Nauru","Niue","Nouvelle-Zélande","Palaos","Papouasie-Nouvelle-Guinée","Salomon","Samoa","Tonga","Tuvalu","Vanuatu"],
    newPays: '',
    compteurAfrique: 0,
    compteurAmerique: 0,
    compteurAsie: 0,
    compteurEurope: 0,
    compteurOceanie: 0,
    compteurTout: 0
    }

  hChange = (event) => {
    const v = event.currentTarget.value;
    this.setState({newPays: v});
  }

  addCountry = (event) => {
    event.preventDefault();
    var countries = this.state.paysFound.slice();
    var countriesAf = this.state.paysFoundAf.slice();
    var countriesAm = this.state.paysFoundAm.slice();
    var countriesAs = this.state.paysFoundAs.slice();
    var countriesEu = this.state.paysFoundEu.slice();
    var countriesOc = this.state.paysFoundOc.slice();
    var cE = this.state.compteurEurope;
    var cAf = this.state.compteurAfrique;
    var cAm = this.state.compteurAmerique;
    var cAs = this.state.compteurAsie;
    var cO = this.state.compteurOceanie;
    var cT = this.state.compteurTout;
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
      countriesEu.push(this.state.paysEuropeen[pE.indexOf(p)]);
      this.setState({compteurEurope : cE+1});
      this.setState({compteurTout : cT+1});
    } else if(pAf.includes(p) && !(this.state.paysFound.includes(this.state.paysAfrique[pAf.indexOf(p)]))){
      countries.push(this.state.paysAfrique[pAf.indexOf(p)]);
      countriesAf.push(this.state.paysAfrique[pAf.indexOf(p)]);
      this.setState({compteurAfrique : cAf+1});
      this.setState({compteurTout : cT+1});
    } else if(pAm.includes(p) && !(this.state.paysFound.includes(this.state.paysAmerique[pAm.indexOf(p)]))){
      countries.push(this.state.paysAmerique[pAm.indexOf(p)]);
      countriesAm.push(this.state.paysAmerique[pAm.indexOf(p)]);
      this.setState({compteurAmerique : cAm+1});
      this.setState({compteurTout : cT+1});
    } else if(pAs.includes(p) && !(this.state.paysFound.includes(this.state.paysAsie[pAs.indexOf(p)]))){
      countries.push(this.state.paysAsie[pAs.indexOf(p)]);
      countriesAs.push(this.state.paysAsie[pAs.indexOf(p)]);
      this.setState({compteurAsie : cAs+1});
      this.setState({compteurTout : cT+1});
    } else if(pO.includes(p) && !(this.state.paysFound.includes(this.state.paysOceanie[pO.indexOf(p)]))){
      countries.push(this.state.paysOceanie[pO.indexOf(p)]);
      countriesOc.push(this.state.paysOceanie[pO.indexOf(p)]);
      this.setState({compteurOceanie : cO+1});
      this.setState({compteurTout : cT+1});
    }
    this.setState({paysFound : countries});
    this.setState({paysFoundAf : countriesAf});
    this.setState({paysFoundAs : countriesAs});
    this.setState({paysFoundAm : countriesAm});
    this.setState({paysFoundEu : countriesEu});
    this.setState({paysFoundOc : countriesOc});
  }

  render(){
    return(
      <div>
        <div class="centerdiv">
          <h1>Countries Game</h1>
          <form onSubmit={this.addCountry}>
            <input value={this.state.newPays} onChange={this.hChange} type="text" placeholder="Entrer un pays"/>
            <button>Confirmer</button>
          </form>
        </div>
        <div class="grid-container">
          <div class="grid-item-one"><p>Pays en Afrique : {this.state.compteurAfrique}/{this.state.paysAfrique.length}</p></div>
          <div class="grid-item-two"><p>Pays en Amérique : {this.state.compteurAmerique}/{this.state.paysAmerique.length}</p></div>
          <div class="grid-item-three"><p>Pays en Asie : {this.state.compteurAsie}/{this.state.paysAsie.length}</p></div>
          <div class="grid-item-four"><p>Pays en Europe : {this.state.compteurEurope}/{this.state.paysEuropeen.length}</p></div>
          <div class="grid-item-five"><p>Pays en Océanie : {this.state.compteurOceanie}/{this.state.paysOceanie.length}</p></div>
          <div class="grid-item-six"><p>Total : {this.state.compteurTout}/{this.state.paysAfrique.length+this.state.paysAmerique.length+this.state.paysAsie.length+this.state.paysEuropeen.length+this.state.paysOceanie.length}</p></div>
          <div class="grid-item-seven"><ul>{this.state.paysFoundAf.map(m => (<li>{m}</li>))}</ul></div>
          <div class="grid-item-eight"><ul>{this.state.paysFoundAm.map(m => (<li>{m}</li>))}</ul></div>
          <div class="grid-item-nine"><ul>{this.state.paysFoundAs.map(m => (<li>{m}</li>))}</ul></div>
          <div class="grid-item-ten"><ul>{this.state.paysFoundEu.map(m => (<li>{m}</li>))}</ul></div>
          <div class="grid-item-eleven"><ul>{this.state.paysFoundOc.map(m => (<li>{m}</li>))}</ul></div>
          <div class="grid-item-twelve"><ul>{this.state.paysFound.map(m => (<li>{m}</li>))}</ul></div>
        </div> 
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
