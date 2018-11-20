import React from 'react';
import Grid from '@material-ui/core/Grid';
import Information from './components/Informations';
import Form from './components/Form';

const ContactUs = ({ classes }) => (
    <Grid
        container
        className={classes.pageContainer}
        direction={'row'}
    >
        <Grid
            item
            container
            sm={12}
            md={6}
            xs={12}
            justify='center'
            alignContent='center'
            alignItems='center'
            >
            <Information />
        </Grid>
        <Grid
            container
            sm={12}
            md={6}
            xs={12}
            justify='center'
            alignContent='center'
            alignItems='center'
            >
                <Form />
        </Grid>  
    </Grid>
);

export default ContactUs;