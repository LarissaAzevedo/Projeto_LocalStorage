import React, { Component } from 'react';
import './App.css';
// Components
import Card from './Components/Card';
// Pages
import BemVindo from './Pages/BemVindo';

class App extends Component {
  render() {
    return (
      <div className="card">
        {/* <Card label="" title="Informacoes" />" */}
        <BemVindo />
     </div>
    )
  }
}

export default App;
