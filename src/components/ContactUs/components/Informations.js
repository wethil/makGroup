import React from 'react';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Information = () => (
    <div
    style={{ padding: '3%'}}
    >
        <Grid

            className='flex'
            direction='column'
            alignItems={'center'}
            // justify='center'
        >
            <Typography align="center" variant="display3" gutterBottom> Who Are We?  </Typography>
            <Typography  align="center" variant="subheading" gutterBottom>
            To offer standout solutions that help our customers respond to challenges, create new opportunities, and drive business success and most importantly, deliver hospitality that exceeds expectations.
            </Typography>
            <Typography align="center" variant="display3" gutterBottom> About the Founder </Typography>
            <Typography  align="center" variant="subheading" gutterBottom>
            Mehmet A. Kucukgurses
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
            A motivated self-starter capable of building productive working relationships across functional teams and other areas of an organization, as well as the ability to collaborate as part of a wider sales team or work independently, taking sole-ownership of projects. Has proven track record of achieving business results with experience in building strategic network through new business opportunities, generating business via different sources. Well-developed problem solving skills and ability to work in a high change and fast paced environment.
            </Typography>
            <Typography variant="caption" gutterBottom align="center">
                    2009 Faculty of Art and Design,  İzmir University of Economics
            </Typography>
            <Typography variant="caption" gutterBottom align="center">
                 2010 MA, Fashion Management  University of Southampton
            </Typography>
        </Grid>
    </div> 
);

export default Information;