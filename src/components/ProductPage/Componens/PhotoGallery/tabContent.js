import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 600,
  },
  subheader: {
    width: '100%',
  },
});

function TabContent(props) {
  const { classes, images } = props;

  return (
    <div className={classes.root}>
      <GridList spacing={15} cellHeight={200} className={classes.gridList} cols={3}>
        {images.map((tile, i) => (
          <GridListTile key={tile.src} cols={tile.cols || 1}>
            <img onClick={(e)=> props.onClick(e, i)} src={tile.src} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TabContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabContent);