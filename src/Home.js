import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Home extends React.Component {
    render(){
        return(
        <div>
            <div className="container">
                Know Your World has two games for the moment !
                <ul>
                    <li>
                    Countries Game (find all countries of the world)
                    </li>
                    <li>
                    Football Club (find all football club of France,England,Italy,Spain and Deutschland (first and second division))
                    </li>
                </ul>
               
              
            </div>
        </div>
        )  
    }
}

export default Home;