import React, { Component } from 'react';
import Lightbox from 'react-images';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabContent from './PhotoGallery/tabContent';

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    subheader: {
      width: '100%',
    },
    tabsRoot: {
      borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
      backgroundColor: '#1890ff',
    },
    tabRoot: {
      textTransform: 'initial',
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing.unit * 4,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&$tabSelected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#40a9ff',
      },
    },
    tabSelected: {},
    typography: {
      padding: theme.spacing.unit * 3,
    },
  });

  function TabContainer({ children, dir }) {
    return (
      <div
        style={{marginTop: 10}}
      >
        {children}
      </div>
    );
  }
  
  

 class PhotoGallery extends Component {
    constructor(props) {
      super(props);
  
      this.state = { 
        currentImage: 0,
        tabIndex: 0,
      };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, index) {
      this.setState({
        currentImage: index,
        lightboxIsOpen: true,
      });
    }
    closeLightbox() {
      this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
      });
    }

    gotoPrevious() {
      this.setState({
        currentImage: this.state.currentImage - 1,
      });
    }
    gotoNext() {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    }
    render() {
     const { classes, images, theme } = this.props;
      const { photoIndex, isOpen, tabIndex } = this.state;
      console.log(images);
      const tabItems = []
      const tabContents = []
      Object.keys(images).forEach(key=>{
        const { label, items } = images[key];
        tabItems.push(
          <Tab
          disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          label={label}/>
        )
        tabContents.push(
          <TabContainer>
            <TabContent  onClick={this.openLightbox} images={items} />
          </TabContainer>
        )
      })
      return (
        <div className={classes.root}>
        <Grid sm={12} md={12} xs={12}>
                <AppBar position="static" color="default">
          <Tabs
            value={tabIndex}
            onChange={(e,index)=>this.setState({ tabIndex: index })}
            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
            centered
          >
          {tabItems}
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={tabIndex}
          onChangeIndex={(index)=>this.setState({ tabIndex: index })}
        >
          {tabContents}
        </SwipeableViews>
        {/* <Gallery photos={images} onClick={this.openLightbox} />
        <Lightbox images={images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        /> */}
        </Grid> 
        </div>
      );
    }
  }

  export default withStyles(styles, { withTheme: true })(PhotoGallery);