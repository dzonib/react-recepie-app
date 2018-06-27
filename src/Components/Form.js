import React from 'react';
import {TextField, Button, Grid} from '@material-ui/core'

const Form = ({getRecipe}) => (
  <Grid container alignContent="center">
  <Grid item xs>
  <form onSubmit={getRecipe} >
    <TextField
      name="recipe"
      label="Find Recipes"
      type="text"
      margin="normal"
        />  
    <Button variant="extendedFab" size="medium">
        Find Recipes
      </Button>
  </form>
  </Grid>
  </Grid>
)
  



export default Form