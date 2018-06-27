import React, { Component, Fragment } from 'react';
import Form from './Form'
import Header from './Layouts/Header';

const API_KEY = 'd5985cd2c6589e7163d7dc7ae63fe44a'


class App extends Component {

  state = {
    recipes: []
  }

  

  getRecipe = async (e) => {
    e.preventDefault()
    const recipeName = e.target.elements.recipeName.value;
    const data = await (await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`)).json()

    this.setState(() => ({recipes: data.recipes}))
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
      <Header/>
        Hi!
        <Form getRecipe={this.getRecipe}/>
      </Fragment>
    );
  }
}

export default App;
