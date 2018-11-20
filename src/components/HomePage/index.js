import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainInfo from './mainInfo'
import PhotoMenu from './photoMenu'
import TowelImg from './images/towel.jpeg';
import Cement from './images/cement.jpg';
import Amenities from './images/amenities.jpeg';


const towel = { url: TowelImg, title: 'TEXTILES' }
const cement = { url: Cement, title: 'INDUSTRY' }
const amenities = { url: Amenities, title: 'HOTEL SUPPLIES' }

const HomePage = ({ classes, goToPage }) => (
        <Grid container className={classes.pageContainer} spacing={0}>
            <MainInfo goToPage={goToPage} classes={classes} />
            <PhotoMenu buttonClick={()=> goToPage(1)} goToPage={goToPage} image={towel} />
            <PhotoMenu goToPage={goToPage} buttonClick={()=> goToPage(2)} image={amenities} />
            <PhotoMenu goToPage={goToPage} image={cement} />
        </Grid>
);

export default HomePage;
