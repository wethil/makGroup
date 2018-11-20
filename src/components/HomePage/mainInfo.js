import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const MainInfo = ({ classes, goToPage }) => (
    <Grid
        className='flex'
        item
        sm={12}
        md={6}
        xs={12}
        alignItems={'center'}
       justify='center'
        direction='column'
    >
        <Grid
            direction='column'
            alignItems={'center'}
            // justify='space-evenly'
        >
            <Grid item container>
                <Typography align="center" variant="display3" gutterBottom>
                    MAK Group
             </Typography>
            </Grid>
            <Grid item>
                <Typography variant="subheading" paragraph gutterBottom align="center" >We supply things </Typography>
            </Grid>
            <Grid
            className='flex'
              container
              justify='space-evenly'
              direction='row'
              spacing={16}
                >
                <Grid item>
                    <Button
                        onClick={()=> goToPage(4)}
                        variant="contained"
                        color="primary"
                    >
                        Contact us
                 </Button>
                </Grid>
                <Grid item>
                    <Button
                        onClick={()=> goToPage(4)}
                        variant="outlined"
                        color="secondary" 
                        className={classes.button}
                    >
                        Our Vision
                </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default MainInfo;