import React, { Fragment } from 'react';
import { Paper, CardContent, Typography } from '@material-ui/core';
import {Card, CardMedia} from '@material-ui/core'

const Recipes = ({ recipes }) => (
  <Fragment>
    <Paper>
      {recipes.map((item, i) => (
        <Fragment key={i}>
		  <Card style={{maxWidth: 345}}>
		  	<CardMedia
			  style={{height: 250}}
				title={item.title}
				image={item.image_url}
				 
			/>
			<CardContent>
				<Typography>
					{item.title}
				</Typography>
			</CardContent>
		  </Card>
        </Fragment>
      ))}
    </Paper>
  </Fragment>
);

export default Recipes;

{/* <img src={item.image_url} alt={item.title} />
<p>{item.title}</p> */}