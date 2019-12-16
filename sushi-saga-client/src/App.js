import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    fourSushi: [],
    lastSushiIndex: 0,
    eatenSushi: [],
    budget: 100
  }

  componentDidMount(){
    this.fetchSushi()
  }

  remainBudget=(cost)=>{
    let newBudget= this.state.budget- cost
    this.setState({
      budget: newBudget
    })
  }

  addToEatenSushi=(sushi)=>{
    if (!this.handleEatenSushi(sushi.id)){
        let newArray = [...this.state.eatenSushi, sushi]
        this.setState({
          eatenSushi: newArray
        })
    }
  }

  handleEatenSushi=(id)=>{
    return this.state.eatenSushi.find(e => e.id===id) ? true : false
  }

  fetchSushi= ()=>{
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({
      fourSushi: json.slice(this.state.lastSushiIndex, this.state.lastSushiIndex+4),
      lastSushiIndex: this.state.lastSushiIndex + 4
    }) )
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  budget={this.state.budget} sushis={this.state.fourSushi} onMoreSushi={this.fetchSushi} onAddToEatenSushi={this.addToEatenSushi} onHandleEatenSushi={this.handleEatenSushi} onRemainBudget={this.remainBudget}/>
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;