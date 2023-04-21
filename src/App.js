import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/form';
import FormNew from './components/formNew';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <FormNew />
        </div>
      </div>
    )
  }
}

export default App;
