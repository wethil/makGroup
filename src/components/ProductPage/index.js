import React from 'react';
import Grid from '@material-ui/core/Grid';
import PhotoGallery from './Componens/PhotoGallery';
import Information from './Componens/Information';


const ProductPage = ({ classes, info, images, reversed }) => (
    <Grid
        container
        justify='space-around'
        className={classes.pageContainer}
        direction={!reversed ? 'row' : 'row-reverse' }
    >
        <Grid
            item
            container
            sm={12}
            md={6}
            xs={12}
            justify='space-around'
            alignContent='center'
            alignItems='center'
            >
          
            <Information productInformation={info}/>
        </Grid>
        <Grid
            item
            container
            sm={12}
            md={6}
            xs={12}
            justify='space-around'
            alignContent='center'
            alignItems='center'
            >
                <PhotoGallery images={images} />
        </Grid>  
    </Grid>
);

export default ProductPage;