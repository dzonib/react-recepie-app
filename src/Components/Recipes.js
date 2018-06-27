import React, { Fragment } from 'react';
import {Paper} from '@material-ui/core'

const Recipes = ({ recipes }) => (
	<Fragment>
    <Paper>
       {recipes.map((item, i) => (
			<Fragment key={i}>
				<img src={item.image_url} alt={item.title} />
				<p>{item.title}</p>
	    </Fragment>
		))}
    </Paper>	
	</Fragment>
);

export default Recipes;
