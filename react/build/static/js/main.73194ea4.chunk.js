(this.webpackJsonpknowyourworld=this.webpackJsonpknowyourworld||[]).push([[0],{19:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(0),n=a.n(i),r=a(10),l=a.n(r),c=(a(19),a.p,a(37),a(28)),o=a(4),u=a(50),d=a(51),h=a(12),p=a(13),b=a(16),m=a(15),j=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={paysFound:[],paysFoundAf:[],paysFoundAm:[],paysFoundAs:[],paysFoundEu:[],paysFoundOc:[],paysAfrique:["Afrique du Sud","Alg\xe9rie","Angola","B\xe9nin","Botswana","Burkina Faso","Burundi","Cameroun","Cap-Vert","R\xe9publique centrafricaine","Comores","R\xe9publique du Congo","R\xe9publique d\xe9mocratique du Congo","C\xf4te d'Ivoire","Djibouti","\xc9gypte","\xc9rythr\xe9e","\xc9thiopie","Eswatini","Gabon","Gambie","Ghana","Guin\xe9e","Guin\xe9e-Bissau","Guin\xe9e \xe9quatoriale","Kenya","Lesotho","Liberia","Libye","Madagascar","Malawi","Mali","Maroc","Maurice","Mauritanie","Mozambique","Namibie","Niger","Nigeria","Ouganda","Rwanda","Sao Tom\xe9-et-Principe","S\xe9n\xe9gal","Seychelles","Sierra Leone","Somalie","Soudan","Soudan du Sud","Tanzanie","Tchad","Togo","Tunisie","Zambie","Zimbabwe"],paysAmerique:["Antigua-et-Barbuda","Argentine","Bahamas","Barbade","Belize","Bolivie","Br\xe9sil","Canada","Chili","Colombie","Costa Rica","Cuba","R\xe9publique dominicaine","Dominique","\xc9quateur","\xc9tats-Unis","Grenade","Guatemala","Guyana","Ha\xefti","Honduras","Jama\xefque","Mexique","Nicaragua","Panama","Paraguay","P\xe9rou","Porto Rico","Saint-Christophe-et-Ni\xe9v\xe8s","Sainte-Lucie","Saint-Vincent-et-les-Grenadines","Salvador","Suriname","Trinit\xe9-et-Tobago","Uruguay","Venezuela"],paysAsie:["Afghanistan","Arabie saoudite","Arm\xe9nie","Azerba\xefdjan","Bahre\xefn","Bangladesh","Bhoutan","Birmanie","Brunei","Cambodge","Chine","Cor\xe9e du Nord","Cor\xe9e du Sud","\xc9mirats arabes unis","G\xe9orgie","Inde","Indon\xe9sie","Irak","Iran","Isra\xebl","Japon","Jordanie","Kazakhstan","Kirghizistan","Kowe\xeft","Laos","Liban","Malaisie","Maldives","Mongolie","N\xe9pal","Oman","Ouzb\xe9kistan","Pakistan","Palestine","Philippines","Qatar","Singapour","Sri Lanka","Syrie","Ta\xefwan","Tadjikistan","Tha\xeflande","Timor oriental","Turkm\xe9nistan","Turquie","Vi\xeatnam","Y\xe9men"],paysEuropeen:["Albanie","Allemagne","Andorre","Autriche","Belgique","Bi\xe9lorussie","Bosnie-Herz\xe9govine","Bulgarie","Chypre","Croatie","Danemark","Espagne","Estonie","Finlande","France","Gr\xe8ce","Hongrie","Irlande","Islande","Italie","Kosovo","Lettonie","Liechtenstein","Lituanie","Luxembourg","Mac\xe9doine du Nord","Malte","Moldavie","Monaco","Mont\xe9n\xe9gro","Norv\xe8ge","Pays-Bas","Pologne","Portugal","R\xe9publique tch\xe8que","Roumanie","Royaume-Uni","Russie","Saint-Marin","Serbie","Slovaquie","Slov\xe9nie","Su\xe8de","Suisse","Ukraine","Vatican"],paysOceanie:["Australie","Fidji","Kiribati","\xceles Cook","\xceles Mariannes du Nord","\xceles Marshall","\xc9tats f\xe9d\xe9r\xe9s de Micron\xe9sie","Nauru","Niue","Nouvelle-Z\xe9lande","Palaos","Papouasie-Nouvelle-Guin\xe9e","Salomon","Samoa","Tonga","Tuvalu","Vanuatu"],newPays:"",compteurAfrique:0,compteurAmerique:0,compteurAsie:0,compteurEurope:0,compteurOceanie:0,compteurTout:0,on:!0,start:0,time:0,partieEnd:!1,s:0,m:0,h:0},e.hChange=function(t){var a=t.currentTarget.value;e.setState({newPays:a})},e.addCountry=function(t){t.preventDefault();var a=e.state.paysFound.slice(),s=e.state.paysFoundAf.slice(),i=e.state.paysFoundAm.slice(),n=e.state.paysFoundAs.slice(),r=e.state.paysFoundEu.slice(),l=e.state.paysFoundOc.slice(),c=e.state.compteurEurope,o=e.state.compteurAfrique,u=e.state.compteurAmerique,d=e.state.compteurAsie,h=e.state.compteurOceanie,p=e.state.compteurTout,b=e.state.newPays.toLowerCase();b=(b=(b=(b=(b=(b=b.charAt(0).toUpperCase()+b.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ");var m=e.state.paysEuropeen.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),j=e.state.paysAfrique.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),g=e.state.paysAmerique.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),O=e.state.paysAsie.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),C=e.state.paysOceanie.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),f=!0;m.includes(b)&&!e.state.paysFound.includes(e.state.paysEuropeen[m.indexOf(b)])?(a.push(e.state.paysEuropeen[m.indexOf(b)]),r.push(e.state.paysEuropeen[m.indexOf(b)]),e.setState({compteurEurope:c+1})):j.includes(b)&&!e.state.paysFound.includes(e.state.paysAfrique[j.indexOf(b)])?(a.push(e.state.paysAfrique[j.indexOf(b)]),s.push(e.state.paysAfrique[j.indexOf(b)]),e.setState({compteurAfrique:o+1})):g.includes(b)&&!e.state.paysFound.includes(e.state.paysAmerique[g.indexOf(b)])?(a.push(e.state.paysAmerique[g.indexOf(b)]),i.push(e.state.paysAmerique[g.indexOf(b)]),e.setState({compteurAmerique:u+1})):O.includes(b)&&!e.state.paysFound.includes(e.state.paysAsie[O.indexOf(b)])?(a.push(e.state.paysAsie[O.indexOf(b)]),n.push(e.state.paysAsie[O.indexOf(b)]),e.setState({compteurAsie:d+1})):C.includes(b)&&!e.state.paysFound.includes(e.state.paysOceanie[C.indexOf(b)])?(a.push(e.state.paysOceanie[C.indexOf(b)]),l.push(e.state.paysOceanie[C.indexOf(b)]),e.setState({compteurOceanie:h+1})):f=!1,f&&(e.setState({compteurTout:p+1}),e.setState({newPays:""})),e.setState({paysFound:a.sort()}),e.setState({paysFoundAf:s.sort()}),e.setState({paysFoundAs:n.sort()}),e.setState({paysFoundAm:i.sort()}),e.setState({paysFoundEu:r.sort()}),e.setState({paysFoundOc:l.sort()})},e.startTimer=function(){e.setState({on:!0,time:e.state.time,start:Date.now()-e.state.time}),e.timer=setInterval((function(){e.setState({time:Date.now()-e.state.start})}),10)},e}return Object(p.a)(a,[{key:"render",value:function(){if(this.state.compteurTout===this.state.paysAfrique.length+this.state.paysAmerique.length+this.state.paysAsie.length+this.state.paysEuropeen.length+this.state.paysOceanie.length&&this.state.on){var e=("0"+Math.floor(this.state.time/1e3)%60).slice(-2),t=("0"+Math.floor(this.state.time/6e4)%60).slice(-2),a=("0"+Math.floor(this.state.time/36e5)).slice(-2);this.setState({on:!1,partieEnd:!0,s:e,m:t,h:a,time:0,start:0}),clearInterval(this.timer),this.startTimer=null}if(this.state.on){var i=("0"+Math.floor(this.state.time/1e3)%60).slice(-2),n=("0"+Math.floor(this.state.time/6e4)%60).slice(-2),r=("0"+Math.floor(this.state.time/36e5)).slice(-2);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"centerdiv",children:[Object(s.jsx)("h1",{children:"Countries Game"}),Object(s.jsxs)("form",{onSubmit:this.addCountry,children:[Object(s.jsx)("input",{value:this.state.newPays,onChange:this.hChange,type:"text",placeholder:"Entrer un pays"}),Object(s.jsx)("button",{onClick:this.startTimer,children:"Confirmer"})]}),Object(s.jsxs)("div",{class:"chrono",children:[r," : ",n," : ",i]})]}),Object(s.jsxs)("div",{class:"grid-container",children:[Object(s.jsx)("div",{class:"grid-item-one",children:Object(s.jsxs)("p",{children:["Pays en Afrique : ",this.state.compteurAfrique,"/",this.state.paysAfrique.length]})}),Object(s.jsx)("div",{class:"grid-item-two",children:Object(s.jsxs)("p",{children:["Pays en Am\xe9rique : ",this.state.compteurAmerique,"/",this.state.paysAmerique.length]})}),Object(s.jsx)("div",{class:"grid-item-three",children:Object(s.jsxs)("p",{children:["Pays en Asie : ",this.state.compteurAsie,"/",this.state.paysAsie.length]})}),Object(s.jsx)("div",{class:"grid-item-four",children:Object(s.jsxs)("p",{children:["Pays en Europe : ",this.state.compteurEurope,"/",this.state.paysEuropeen.length]})}),Object(s.jsx)("div",{class:"grid-item-five",children:Object(s.jsxs)("p",{children:["Pays en Oc\xe9anie : ",this.state.compteurOceanie,"/",this.state.paysOceanie.length]})}),Object(s.jsx)("div",{class:"grid-item-six",children:Object(s.jsxs)("p",{children:["Total : ",this.state.compteurTout,"/",this.state.paysAfrique.length+this.state.paysAmerique.length+this.state.paysAsie.length+this.state.paysEuropeen.length+this.state.paysOceanie.length]})}),Object(s.jsx)("div",{class:"grid-item-seven",children:Object(s.jsx)("ul",{children:this.state.paysFoundAf.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-eight",children:Object(s.jsx)("ul",{children:this.state.paysFoundAm.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-nine",children:Object(s.jsx)("ul",{children:this.state.paysFoundAs.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-ten",children:Object(s.jsx)("ul",{children:this.state.paysFoundEu.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-eleven",children:Object(s.jsx)("ul",{children:this.state.paysFoundOc.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-twelve",children:Object(s.jsx)("ul",{children:this.state.paysFound.map((function(e){return Object(s.jsx)("li",{children:e})}))})})]})]})}return Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{children:["F\xe9licitations vous avez trouv\xe9 tous les pays en ",this.state.h," : ",this.state.m," : ",this.state.s]})})}}]),a}(n.a.Component),g=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(e=t.call.apply(t,[this].concat(i))).state={clubFound:[],clubFoundFr:[],clubFoundEn:[],clubFoundDe:[],clubFoundEs:[],clubFoundIt:[],clubFrance:["Olympique lyonnais","Paris Saint-Germain","LOSC Lille","AS Monaco FC","Stade Rennais FC","Olympique de Marseille","Girondins de Bordeaux","FC Metz","RC Lens","Angers SCO","Montpellier HSC","OGC Nice","Stade brestois 29","Stade de Reims","RC Strasbourg Alsace","AS Saint-\xc9tienne","FC Nantes","Dijon FCO","FC Lorient","N\xeemes Olympique","ESTAC Troyes","Toulouse FC","Clermont Foot 63","Grenoble Foot 38","AJ Auxerre","Paris FC","Valenciennes FC","FC Sochaux-Montb\xe9liard","Amiens SC","SM Caen","Chamois niortais FC","Le Havre AC","AC Ajaccio","USL Dunkerque ","EA Guingamp","Rodez AF","AS Nancy Lorraine","FC Chambly Oise","Pau FC ","LB Ch\xe2teauroux"],clubAngleterre:["Manchester City","Manchester United","Leicester City","Liverpool FC","West Ham United","Tottenham Hotspur","Everton FC","Chelsea FC","Arsenal FC","Aston Villa","Southampton FC","Leeds United","Wolverhampton Wanderers","Crystal Palace","Burnley FC","Newcastle United","Brighton & Hove Albion","Fulham FC","West Bromwich Albion","Sheffield United","Norwich City","Swansea City","Brentford FC","Watford FC","Reading FC","AFC Bournemouth","Middlesbrough FC","Blackburn Rovers","Bristol City","Stoke City","Preston North End","Barnsley FC","Luton Town","Huddersfield Town","Cardiff City","Millwall FC","Coventry City","Derby County","Queens Park Rangers","Birmingham City","Nottingham Forest","Rotherham United","Sheffield Wednesday","Wycombe Wanderers"],clubAllemagne:["Bayern Munich","RB Leipzig","Bayer Leverkusen","VfL Wolfsburg","Borussia M\xf6nchengladbach","Borussia Dortmund","Eintracht Francfort","1. FC Union Berlin","SC Fribourg","VfB Stuttgart","TSG 1899 Hoffenheim","FC Augsbourg","Werder Br\xeame","Hertha Berlin","Arminia Bielefeld","1. FC Cologne","1. FSV Mayence 05","Schalke 04","Hambourg SV","VfL Bochum","SpVgg Greuther F\xfcrth","Holstein Kiel","Fortuna D\xfcsseldorf","Karlsruher SC","FC Erzgebirge Aue","Hanovre 96","SC Paderborn 07","1. FC Heidenheim 1846","SSV Jahn Ratisbonne","VfL Osnabr\xfcck","SV Darmstadt 98","1. FC Nuremberg","Eintracht Brunswick","FC Sankt Pauli","SV Sandhausen","FC W\xfcrzburger Kickers"],clubEspagne:["Atl\xe9tico de Madrid","Real Madrid","FC Barcelone","Villarreal CF","Real Sociedad","S\xe9ville FC","Grenade CF","Celta de Vigo","Cadix CF","Real Betis","Levante UD","Athletic Bilbao","Getafe CF","Valence CF","SD Eibar","Deportivo Alav\xe9s","Real Valladolid","Elche CF","CA Osasuna","SD Huesca","Espanyol de Barcelone","RCD Majorque","UD Almer\xeda","Rayo Vallecano","CD Legan\xe9s","Sporting de Gij\xf3n","SD Ponferradina","Girona FC","CD Mirand\xe9s","CF Fuenlabrada","CD Lugo","M\xe1laga CF","UD Logro\xf1\xe9s","Real Oviedo","UD Las Palmas","CD Tenerife","Real Saragosse","FC Cartagena","CE Sabadell","CD Castell\xf3n","AD Alcorc\xf3n","Albacete Balompi\xe9"],clubItalie:["AC Milan","Inter Milan","AS Rome","Juventus FC","US Sassuolo","SSC Naples","Atalanta Bergame","SS Lazio","Hellas V\xe9rone","Benevento Calcio","UC Sampdoria","Bologna FC","Udinese Calcio","ACF Fiorentina","Cagliari Calcio","Spezia Calcio","Torino","Parme Calcio","Genoa CFC","FC Crotone","Ascoli","Brescia Calcio","Chievo Verone","Cittadella","Cosenza","Cremonese","Empoli","Frosinone","Monza","Pescara","Pise","Pordenone Calcio SSD","Reggiana","Reggina","Salernitana","SPAL","US Lecce","Venise","Vicence","Virtus Entella"],newClub:"",compteurFrance:0,compteurAngleterre:0,compteurAllemagne:0,compteurEspagne:0,compteurItalie:0,compteurTout:0,on:!0,start:0,time:0,partieEnd:!1,s:0,m:0,h:0},e.hChange=function(t){var a=t.currentTarget.value;e.setState({newClub:a})},e.addClub=function(t){t.preventDefault();var a=e.state.clubFound.slice(),s=e.state.clubFoundFr.slice(),i=e.state.clubFoundEn.slice(),n=e.state.clubFoundDe.slice(),r=e.state.clubFoundEs.slice(),l=e.state.clubFoundIt.slice(),c=e.state.compteurFrance,o=e.state.compteurAngleterre,u=e.state.compteurAllemagne,d=e.state.compteurEspagne,h=e.state.compteurItalie,p=e.state.compteurTout,b=e.state.newClub.toLowerCase();b=(b=(b=(b=(b=(b=b.charAt(0).toUpperCase()+b.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ");var m=e.state.clubFrance.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),j=e.state.clubAngleterre.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),g=e.state.clubAllemagne.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),O=e.state.clubEspagne.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),C=e.state.clubItalie.map((function(e){return e=(e=(e=(e=(e=(e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1)).normalize("NFD").replace(/[\u0300-\u036f]/g,"")).replace("-"," ")).replace("-"," ")).replace("-"," ")).replace("-"," ")})),f=!0;m.includes(b)&&!e.state.clubFound.includes(e.state.clubFrance[m.indexOf(b)])?(a.push(e.state.clubFrance[m.indexOf(b)]),s.push(e.state.clubFrance[m.indexOf(b)]),e.setState({compteurFrance:c+1})):j.includes(b)&&!e.state.clubFound.includes(e.state.clubAngleterre[j.indexOf(b)])?(a.push(e.state.clubAngleterre[j.indexOf(b)]),i.push(e.state.clubAngleterre[j.indexOf(b)]),e.setState({compteurAngleterre:o+1})):g.includes(b)&&!e.state.clubFound.includes(e.state.clubAllemagne[g.indexOf(b)])?(a.push(e.state.clubAllemagne[g.indexOf(b)]),n.push(e.state.clubAllemagne[g.indexOf(b)]),e.setState({compteurAllemagne:u+1})):O.includes(b)&&!e.state.clubFound.includes(e.state.clubEspagne[O.indexOf(b)])?(a.push(e.state.clubEspagne[O.indexOf(b)]),r.push(e.state.clubEspagne[O.indexOf(b)]),e.setState({compteurEspagne:d+1})):C.includes(b)&&!e.state.clubFound.includes(e.state.clubItalie[C.indexOf(b)])?(a.push(e.state.clubItalie[C.indexOf(b)]),l.push(e.state.clubItalie[C.indexOf(b)]),e.setState({compteurItalie:h+1})):f=!1,f&&(e.setState({compteurTout:p+1}),e.setState({newClub:""})),e.setState({clubFound:a.sort()}),e.setState({clubFoundFr:s.sort()}),e.setState({clubFoundEn:i.sort()}),e.setState({clubFoundDe:n.sort()}),e.setState({clubFoundEs:r.sort()}),e.setState({clubFoundIt:l.sort()})},e.startTimer=function(){e.setState({on:!0,time:e.state.time,start:Date.now()-e.state.time}),e.timer=setInterval((function(){e.setState({time:Date.now()-e.state.start})}),10)},e}return Object(p.a)(a,[{key:"render",value:function(){if(this.state.compteurTout===this.state.clubFrance.length+this.state.clubAngleterre.length+this.state.clubAllemagne.length+this.state.clubEspagne.length+this.state.clubItalie.length&&this.state.on){var e=("0"+Math.floor(this.state.time/1e3)%60).slice(-2),t=("0"+Math.floor(this.state.time/6e4)%60).slice(-2),a=("0"+Math.floor(this.state.time/36e5)).slice(-2);this.setState({on:!1,partieEnd:!0,s:e,m:t,h:a,time:0,start:0}),clearInterval(this.timer),this.startTimer=null}if(this.state.on){var i=("0"+Math.floor(this.state.time/1e3)%60).slice(-2),n=("0"+Math.floor(this.state.time/6e4)%60).slice(-2),r=("0"+Math.floor(this.state.time/36e5)).slice(-2);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{class:"centerdiv",children:[Object(s.jsx)("h1",{children:"Football Club"}),Object(s.jsxs)("form",{onSubmit:this.addClub,children:[Object(s.jsx)("input",{value:this.state.newClub,onChange:this.hChange,type:"text",placeholder:"Entrer un club"}),Object(s.jsx)("button",{onClick:this.startTimer,children:"Confirmer"})]}),Object(s.jsxs)("div",{class:"chrono",children:[r," : ",n," : ",i]})]}),Object(s.jsxs)("div",{class:"grid-container",children:[Object(s.jsx)("div",{class:"grid-item-one",children:Object(s.jsxs)("p",{children:["Clubs fran\xe7ais : ",this.state.compteurFrance,"/",this.state.clubFrance.length]})}),Object(s.jsx)("div",{class:"grid-item-two",children:Object(s.jsxs)("p",{children:["Clubs anglais : ",this.state.compteurAngleterre,"/",this.state.clubAngleterre.length]})}),Object(s.jsx)("div",{class:"grid-item-three",children:Object(s.jsxs)("p",{children:["Clubs allemands : ",this.state.compteurAllemagne,"/",this.state.clubAllemagne.length]})}),Object(s.jsx)("div",{class:"grid-item-four",children:Object(s.jsxs)("p",{children:["Clubs espagnols : ",this.state.compteurEspagne,"/",this.state.clubEspagne.length]})}),Object(s.jsx)("div",{class:"grid-item-five",children:Object(s.jsxs)("p",{children:["Clubs italiens : ",this.state.compteurItalie,"/",this.state.clubItalie.length]})}),Object(s.jsx)("div",{class:"grid-item-six",children:Object(s.jsxs)("p",{children:["Total : ",this.state.compteurTout,"/",this.state.clubFrance.length+this.state.clubAngleterre.length+this.state.clubAllemagne.length+this.state.clubEspagne.length+this.state.clubItalie.length]})}),Object(s.jsx)("div",{class:"grid-item-seven",children:Object(s.jsx)("ul",{children:this.state.clubFoundFr.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-eight",children:Object(s.jsx)("ul",{children:this.state.clubFoundEn.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-nine",children:Object(s.jsx)("ul",{children:this.state.clubFoundDe.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-ten",children:Object(s.jsx)("ul",{children:this.state.clubFoundEs.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-eleven",children:Object(s.jsx)("ul",{children:this.state.clubFoundIt.map((function(e){return Object(s.jsx)("li",{children:e})}))})}),Object(s.jsx)("div",{class:"grid-item-twelve",children:Object(s.jsx)("ul",{children:this.state.clubFound.map((function(e){return Object(s.jsx)("li",{children:e})}))})})]})]})}return Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{children:["F\xe9licitations vous avez trouv\xe9 tous les clubs en ",this.state.h," : ",this.state.m," : ",this.state.s]})})}}]),a}(n.a.Component),O=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:["Know Your World has two games for the moment !",Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:"Countries Game (find all countries of the world)"}),Object(s.jsx)("li",{children:"Football Club (find all football club of France,England,Italy,Spain and Deutschland (first and second division))"})]})]})})}}]),a}(n.a.Component),C=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{action:"register.php",children:[Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Register"}),Object(s.jsx)("p",{children:"Create an account to memorize your scores in games."}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"pseudo",children:Object(s.jsx)("b",{children:"Pseudo"})}),Object(s.jsx)("input",{type:"text",placeholder:"Enter Pseudo",name:"pseudo",id:"pseudo",required:!0})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"email",children:Object(s.jsx)("b",{children:"Email"})}),Object(s.jsx)("input",{type:"text",placeholder:"Enter Email",name:"email",id:"email",required:!0})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"psw",children:Object(s.jsx)("b",{children:"Password"})}),Object(s.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",id:"psw",required:!0})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{for:"psw-repeat",children:Object(s.jsx)("b",{children:"Repeat Password"})}),Object(s.jsx)("input",{type:"password",placeholder:"Repeat Password",name:"psw-repeat",id:"psw-repeat",required:!0})]}),Object(s.jsx)("button",{type:"submit",class:"registerbtn",children:"Register"})]}),Object(s.jsx)("div",{className:"container signin",children:Object(s.jsxs)("p",{children:["Already have an account? ",Object(s.jsx)("a",{href:"#",children:"Sign in"}),"."]})})]})})}}]),a}(n.a.Component);var f=function(){return Object(s.jsx)(c.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsxs)(u.a,{bg:"dark",variant:"dark",children:[Object(s.jsx)(u.a.Brand,{href:"/home",children:"Know Your World"}),Object(s.jsxs)(d.a,{className:"mr-auto",children:[Object(s.jsx)(d.a.Link,{href:"/home",children:"Home"}),Object(s.jsx)(d.a.Link,{href:"/register",children:"Register"}),Object(s.jsx)(d.a.Link,{href:"/countries",children:"Countries"}),Object(s.jsx)(d.a.Link,{href:"/football",children:"Football Club"})]})]}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/home",component:O}),Object(s.jsx)(o.a,{path:"/register",component:C}),Object(s.jsx)(o.a,{path:"/countries",component:j}),Object(s.jsx)(o.a,{path:"/football",component:g})]})]})})};a(46);l.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.73194ea4.chunk.js.map