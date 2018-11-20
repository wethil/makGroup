import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Information = ({ productInformation }) => (
    <Grid className='primaryBorder' sm={12} md={10} xs={12}>
        <Typography variant="display1" align="center" gutterBottom>
            {productInformation.title}
        </Typography>
        {
                productInformation.genres.map(g => (
                    <Typography variant="body1" paragraph gutterBottom align="center">
                        {g}
                    </Typography>
                ))
            }
            
            {
    productInformation.secondTitle && (
        <Grid>
            <Typography variant="title" align="center" gutterBottom>
                {productInformation.secondTitle.title}
            </Typography>
            <Typography variant="subheading" align="center" gutterBottom>
                {productInformation.secondTitle.inf}
            </Typography>
            {
                productInformation.secondTitle.genres &&
                productInformation.secondTitle.genres.map(g => (
                    <Typography variant="caption" gutterBottom align="center">
                        {g}
                    </Typography>
                ))
            }
        </Grid>
    )
}
    </Grid> 
);

export default Information;