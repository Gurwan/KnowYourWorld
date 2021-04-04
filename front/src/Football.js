import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FootballClub extends React.Component {

  state = {
    clubFound : [],
    clubFoundFr : [],
    clubFoundEn : [],
    clubFoundDe : [],
    clubFoundEs : [],
    clubFoundIt : [],
    clubFrance : ["Olympique lyonnais","Paris Saint-Germain","LOSC Lille","AS Monaco FC","Stade Rennais FC","Olympique de Marseille","Girondins de Bordeaux","FC Metz","RC Lens","Angers SCO","Montpellier HSC","OGC Nice","Stade brestois 29","Stade de Reims","RC Strasbourg Alsace","AS Saint-Étienne","FC Nantes","Dijon FCO","FC Lorient","Nîmes Olympique","ESTAC Troyes","Toulouse FC","Clermont Foot 63","Grenoble Foot 38","AJ Auxerre","Paris FC","Valenciennes FC","FC Sochaux-Montbéliard","Amiens SC","SM Caen","Chamois niortais FC","Le Havre AC","AC Ajaccio","USL Dunkerque ","EA Guingamp","Rodez AF","AS Nancy Lorraine","FC Chambly Oise","Pau FC ","LB Châteauroux"],
    clubAngleterre : ["Manchester City","Manchester United","Leicester City","Liverpool FC","West Ham United","Tottenham Hotspur","Everton FC","Chelsea FC","Arsenal FC","Aston Villa","Southampton FC","Leeds United","Wolverhampton Wanderers","Crystal Palace","Burnley FC","Newcastle United","Brighton & Hove Albion","Fulham FC","West Bromwich Albion","Sheffield United","Norwich City","Swansea City","Brentford FC","Watford FC","Reading FC","AFC Bournemouth","Middlesbrough FC","Blackburn Rovers","Bristol City","Stoke City","Preston North End","Barnsley FC","Luton Town","Huddersfield Town","Cardiff City","Millwall FC","Coventry City","Derby County","Queens Park Rangers","Birmingham City","Nottingham Forest","Rotherham United","Sheffield Wednesday","Wycombe Wanderers"],
    clubAllemagne : ["Bayern Munich","RB Leipzig","Bayer Leverkusen","VfL Wolfsburg","Borussia Mönchengladbach","Borussia Dortmund","Eintracht Francfort","1. FC Union Berlin","SC Fribourg","VfB Stuttgart","TSG 1899 Hoffenheim","FC Augsbourg","Werder Brême","Hertha Berlin","Arminia Bielefeld","1. FC Cologne","1. FSV Mayence 05","Schalke 04","Hambourg SV","VfL Bochum","SpVgg Greuther Fürth","Holstein Kiel","Fortuna Düsseldorf","Karlsruher SC","FC Erzgebirge Aue","Hanovre 96","SC Paderborn 07","1. FC Heidenheim 1846","SSV Jahn Ratisbonne","VfL Osnabrück","SV Darmstadt 98","1. FC Nuremberg","Eintracht Brunswick","FC Sankt Pauli","SV Sandhausen","FC Würzburger Kickers"],
    clubEspagne : ["Atlético de Madrid","Real Madrid","FC Barcelone","Villarreal CF","Real Sociedad","Séville FC","Grenade CF","Celta de Vigo","Cadix CF","Real Betis","Levante UD","Athletic Bilbao","Getafe CF","Valence CF","SD Eibar","Deportivo Alavés","Real Valladolid","Elche CF","CA Osasuna","SD Huesca","Espanyol de Barcelone","RCD Majorque","UD Almería","Rayo Vallecano","CD Leganés","Sporting de Gijón","SD Ponferradina","Girona FC","CD Mirandés","CF Fuenlabrada","CD Lugo","Málaga CF","UD Logroñés","Real Oviedo","UD Las Palmas","CD Tenerife","Real Saragosse","FC Cartagena","CE Sabadell","CD Castellón","AD Alcorcón","Albacete Balompié"],
    clubItalie : ["AC Milan","Inter Milan","AS Rome","Juventus FC","US Sassuolo","SSC Naples","Atalanta Bergame","SS Lazio","Hellas Vérone","Benevento Calcio","UC Sampdoria","Bologna FC","Udinese Calcio","ACF Fiorentina","Cagliari Calcio","Spezia Calcio","Torino","Parme Calcio","Genoa CFC","FC Crotone","Ascoli","Brescia Calcio","Chievo Verone","Cittadella","Cosenza","Cremonese","Empoli","Frosinone","Monza","Pescara","Pise","Pordenone Calcio SSD","Reggiana","Reggina","Salernitana","SPAL","US Lecce","Venise","Vicence","Virtus Entella"],
    newClub: '',
    compteurFrance: 0,
    compteurAngleterre: 0,
    compteurAllemagne: 0,
    compteurEspagne: 0,
    compteurItalie: 0,
    compteurTout: 0,
    on: true,
    start: 0,
    time: 0,
    partieEnd: false,
    s: 0,
    m: 0,
    h: 0
    }

  hChange = (event) => {
    const v = event.currentTarget.value;
    this.setState({newClub: v});
  }

  addClub = (event) => {
    event.preventDefault();
    var clubs = this.state.clubFound.slice();
    var clubFrance = this.state.clubFoundFr.slice();
    var clubAngleterre = this.state.clubFoundEn.slice();
    var clubAllemagne = this.state.clubFoundDe.slice();
    var clubEspagne = this.state.clubFoundEs.slice();
    var clubItalie = this.state.clubFoundIt.slice();
    var cF = this.state.compteurFrance;
    var cEn = this.state.compteurAngleterre;
    var cDe = this.state.compteurAllemagne;
    var cEs = this.state.compteurEspagne;
    var cIt = this.state.compteurItalie;
    var cT = this.state.compteurTout;
    var c = this.state.newClub.toLowerCase();
    c = c.charAt(0).toUpperCase()+c.slice(1);
    c = c.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    c = c.replace("-"," ");
    c = c.replace("-"," ");
    c = c.replace("-"," ");
    c = c.replace("-"," ");
    var clubF = this.state.clubFrance.map(function(e){
      e = e.toLowerCase();
      e = e.charAt(0).toUpperCase()+e.slice(1);
      e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      e = e.replace("-"," ");
      e = e.replace("-"," ");
      e = e.replace("-"," ");
      e = e.replace("-"," ");
      return e;
    });
    var clubAn = this.state.clubAngleterre.map(function(e){
        e = e.toLowerCase();
        e = e.charAt(0).toUpperCase()+e.slice(1);
        e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        return e;
    });
    var clubAll = this.state.clubAllemagne.map(function(e){
        e = e.toLowerCase();
        e = e.charAt(0).toUpperCase()+e.slice(1);
        e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        return e;
    });
    var clubEs = this.state.clubEspagne.map(function(e){
        e = e.toLowerCase();
        e = e.charAt(0).toUpperCase()+e.slice(1);
        e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        return e;
    });
    var clubI = this.state.clubItalie.map(function(e){
        e = e.toLowerCase();
        e = e.charAt(0).toUpperCase()+e.slice(1);
        e = e.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        e = e.replace("-"," ");
        return e;
    });

    var f = true;
    if(clubF.includes(c) && !(this.state.clubFound.includes(this.state.clubFrance[clubF.indexOf(c)]))){
        clubs.push(this.state.clubFrance[clubF.indexOf(c)]);
        clubFrance.push(this.state.clubFrance[clubF.indexOf(c)]);
        this.setState({compteurFrance : cF+1});
    } else if(clubAn.includes(c) && !(this.state.clubFound.includes(this.state.clubAngleterre[clubAn.indexOf(c)]))){
        clubs.push(this.state.clubAngleterre[clubAn.indexOf(c)]);
        clubAngleterre.push(this.state.clubAngleterre[clubAn.indexOf(c)]);
        this.setState({compteurAngleterre : cEn+1});
    } else if(clubAll.includes(c) && !(this.state.clubFound.includes(this.state.clubAllemagne[clubAll.indexOf(c)]))){
        clubs.push(this.state.clubAllemagne[clubAll.indexOf(c)]);
        clubAllemagne.push(this.state.clubAllemagne[clubAll.indexOf(c)]);
        this.setState({compteurAllemagne : cDe+1});
    } else if(clubEs.includes(c) && !(this.state.clubFound.includes(this.state.clubEspagne[clubEs.indexOf(c)]))){
        clubs.push(this.state.clubEspagne[clubEs.indexOf(c)]);
        clubEspagne.push(this.state.clubEspagne[clubEs.indexOf(c)]);
        this.setState({compteurEspagne : cEs+1});
    } else if(clubI.includes(c) && !(this.state.clubFound.includes(this.state.clubItalie[clubI.indexOf(c)]))){
        clubs.push(this.state.clubItalie[clubI.indexOf(c)]);
        clubItalie.push(this.state.clubItalie[clubI.indexOf(c)]);
        this.setState({compteurItalie : cIt+1});
    } else {
      f = false;
    }

    if(f){
      this.setState({compteurTout : cT+1});
      this.setState({newClub : ''});
    }
    
    this.setState({clubFound : clubs.sort()});
    this.setState({clubFoundFr : clubFrance.sort()});
    this.setState({clubFoundEn : clubAngleterre.sort()});
    this.setState({clubFoundDe : clubAllemagne.sort()});
    this.setState({clubFoundEs : clubEspagne.sort()});
    this.setState({clubFoundIt : clubItalie.sort()});
  }

  startTimer = () => {
    this.setState({on:true,time:this.state.time,start:Date.now()-this.state.time});
    this.timer = setInterval(() => {
        this.setState({time:Date.now()-this.state.start})
    },10);
  }

  render(){
    if(this.state.compteurTout===this.state.clubFrance.length+this.state.clubAngleterre.length+this.state.clubAllemagne.length+this.state.clubEspagne.length+this.state.clubItalie.length && this.state.on){
      let sf = ("0" + (Math.floor(this.state.time / 1000) % 60)).slice(-2);
      let mf = ("0" + (Math.floor(this.state.time / 60000) % 60)).slice(-2);
      let hf = ("0" + Math.floor(this.state.time / 3600000)).slice(-2);
      this.setState({ on: false ,partieEnd: true,s: sf,m: mf,h: hf, time: 0,start: 0});
      clearInterval(this.timer);
      this.startTimer = null;
    } 
  
    if(this.state.on){
      let s = ("0" + (Math.floor(this.state.time / 1000) % 60)).slice(-2);
      let m = ("0" + (Math.floor(this.state.time / 60000) % 60)).slice(-2);
      let h = ("0" + Math.floor(this.state.time / 3600000)).slice(-2);
  
      return(
        <div>
            <div class="centerdiv">
                <h1>Football Club</h1>
                <form onSubmit={this.addClub}>
                <input value={this.state.newClub} onChange={this.hChange} type="text" placeholder="Entrer un club"/>
                <button onClick={this.startTimer}>Confirmer</button>
                </form>
                <div class="chrono">
                {h} : {m} : {s}
                </div>
            </div>
          <div class="grid-container">
            <div class="grid-item-one"><p>Clubs français : {this.state.compteurFrance}/{this.state.clubFrance.length}</p></div>
            <div class="grid-item-two"><p>Clubs anglais : {this.state.compteurAngleterre}/{this.state.clubAngleterre.length}</p></div>
            <div class="grid-item-three"><p>Clubs allemands : {this.state.compteurAllemagne}/{this.state.clubAllemagne.length}</p></div>
            <div class="grid-item-four"><p>Clubs espagnols : {this.state.compteurEspagne}/{this.state.clubEspagne.length}</p></div>
            <div class="grid-item-five"><p>Clubs italiens : {this.state.compteurItalie}/{this.state.clubItalie.length}</p></div>
            <div class="grid-item-six"><p>Total : {this.state.compteurTout}/{this.state.clubFrance.length+this.state.clubAngleterre.length+this.state.clubAllemagne.length+this.state.clubEspagne.length+this.state.clubItalie.length}</p></div>
            <div class="grid-item-seven"><ul>{this.state.clubFoundFr.map(m => (<li>{m}</li>))}</ul></div>
            <div class="grid-item-eight"><ul>{this.state.clubFoundEn.map(m => (<li>{m}</li>))}</ul></div>
            <div class="grid-item-nine"><ul>{this.state.clubFoundDe.map(m => (<li>{m}</li>))}</ul></div>
            <div class="grid-item-ten"><ul>{this.state.clubFoundEs.map(m => (<li>{m}</li>))}</ul></div>
            <div class="grid-item-eleven"><ul>{this.state.clubFoundIt.map(m => (<li>{m}</li>))}</ul></div>
            <div class="grid-item-twelve"><ul>{this.state.clubFound.map(m => (<li>{m}</li>))}</ul></div>
          </div> 
        </div>
      );
    } else {
      return(
        <div>
          <h1>Félicitations vous avez trouvé tous les clubs en {this.state.h} : {this.state.m} : {this.state.s}</h1>
        </div>
      )
    }
  }
}
export default FootballClub;