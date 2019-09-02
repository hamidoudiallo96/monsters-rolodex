import React,{Component} from 'react';

import {CardList} from './components/card-list/card-list.component'

import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// class App extends the Component Library, 
export default class App extends Component {
  // constructor holds extra props
  constructor(props) {
    // inherits properties from the parent component
    super(props)
    // state values
    this.state ={
      monsters:[],
      searchField:''
    }
    
  }

  //  methods, handles input value
  handleChange = e =>{
    e.preventDefault()
    this.setState({
      searchField: e.target.value
    },()=> console.log('state: ', this.state.searchField))

  }



  // component life-cycle
  componentDidMount(prevProps,prevState){
    // returns promise
    fetch('https://jsonplaceholder.typicode.com/users')
    // converts returned promise into a json object
    .then(res =>  res.json())
     //  now we have access to the data
    .then(data => {
      this.setState({
        monsters:data,
        searchField: ''
      })
    })
    .catch(err => console.error(err))
  }
  
  render() {
    // destructuring should occur in render method
    const {monsters,searchField} = this.state
    const filteredMonsters = monsters.filter(item =>(
      item.name.toLowerCase().includes(searchField.toLowerCase())
      )
    )
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder = "Search Monsters"
          handleChange = {this.handleChange}
        />
        
        <CardList monsters = {filteredMonsters}/>
       
       
   
       
      </div>
    )
  }
}





