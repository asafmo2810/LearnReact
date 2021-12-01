import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { CardList } from './Components/cardList/cardList.Component';
import {SearchBox} from './Components/searchBox/searchBox.Component'

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
}
  }
  handleChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
    }
    
  render(){
    const {monsters, searchField} = this.state;
    const filterdMonsters = monsters.filter(monster => (
      monster.name.toLowerCase()
      .includes(searchField
      .toLowerCase())))
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="search monsters" changeHandler={this.handleChange}/>
      <CardList monsters= {filterdMonsters}/>  
    </div>
  );
}
}

export default App;
