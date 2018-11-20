import React from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
// import Button from '@material-ui/core/Button';
import photoClasses from './classes';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => (photoClasses(theme));
const PhotoMenu = ({ image, classes, buttonClick }) => (
    <Grid sm={12} md={6} xs={12}> 
        <ButtonBase
            focusRipple
            key={image.title}
            onClick={buttonClick}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <span
                className={classes.imageSrc}
                style={{
                    backgroundImage: `url(${image.url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
                <Typography
                    component="span"
                    variant="subheading"
                    color="inherit"
                    className={classes.imageTitle}
                >
                    {image.title}
                    <span className={classes.imageMarked} />
                </Typography>
            </span>
    </ButtonBase>
   </Grid> 
);

export default withStyles(styles)(PhotoMenu);