import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import HomePage from '../components/HomePage'
import ProductPage from '../components/ProductPage'
import ContactUs from '../components/ContactUs';
import {
    textileImages,
    suppliesImages,
    industryImages
} from '../components/ProductPage/statics/images';
import {
    textilesInfo,
    hotelSupplies,
    industryInfo
} from '../components/ProductPage/statics/infos';
import ReactPageScroller from 'react-page-scroller';

import Layout from '../components/layout';


const styles = theme => ({
    section: {
        marginTop: theme.spacing.unit * 3
    },
    toolbar: {
        marginTop: theme.spacing.unit * 2
    },

    pageContainer: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
    }
});



class IndexPage extends Component {

    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        console.log(eventKey, 'eventKey');
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({ currentPage: number });
    };
    render() {
        const { classes } = this.props;
        return (
            <Layout>
                <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                    <HomePage classes={classes} goToPage={this.goToPage} />
                    <ProductPage
                        classes={classes}
                        info={textilesInfo}
                        images={textileImages}
                    />
                    <ProductPage
                        reversed
                        classes={classes}
                        info={hotelSupplies}
                        images={suppliesImages}
                    />
                    <ProductPage
                        classes={classes}
                        info={industryInfo}
                        images={industryImages}
                    />

                    <ContactUs classes={classes} />
                </ReactPageScroller>
            </Layout>
        );
    }
}

export default withStyles(styles)(IndexPage);
