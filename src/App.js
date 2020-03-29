import React, { Component } from 'react';
import Menu from './components/MenuComponents';
import Example from './components/NavBarObject';
import Jumbo from './components/JumbotronObject';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };

  }


  render() {
    return (
      <div>
        <Example />
        <Jumbo />
        <Menu dishlar={this.state.dishes}/>
      </div>
    );
  }

}

export default App;