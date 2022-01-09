import React, { Fragment } from 'react';

import NavigationBar from '../components/NavigationBar.js'
import HomeDetail from'../components/HomeDetail.js'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <NavigationBar></NavigationBar>
                <Header></Header>
                <HomeDetail></HomeDetail>
                <Footer></Footer>
            </Fragment>
        )
    };
}

export default Home;