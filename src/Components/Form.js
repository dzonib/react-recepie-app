import React from 'react';
import { TextField, Button, FormControl} from '@material-ui/core';

const Form = ({ getRecipe }) => (
  <form onSubmit={getRecipe} style={{display: "flex", justifyContent: 'center'}}>
    <FormControl>
      <TextField
        name="recipe"
        label="Search For Recipes"
        type="text"
        margin="normal"
      />
      <Button
        style={{ backgroundColor: '#00897B', color: 'white' }}
        type="submit"
        variant="outlined"
      >
        Find Recipes
      </Button>
    </FormControl>
  </form>
);

export default Form;
