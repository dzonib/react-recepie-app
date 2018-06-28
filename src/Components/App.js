import React, { Component, Fragment } from 'react';
import Form from './Form'
import Header from './Layouts/Header';
import Recipes from './Recipes';

const API_KEY = 'd5985cd2c6589e7163d7dc7ae63fe44a'


class App extends Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault()
    console.log(this.state.recipes)

    const recipeName = e.target.elements.recipe.value;
    const data = await (await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)).json()
    this.setState(() => ({recipes: data.recipes}))
  }

  render() {
    console.log(this.state)
    return (
      <Fragment>
      <Header/>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </Fragment>
    );
  }
}

export default App;
