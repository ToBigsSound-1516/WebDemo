import React, { Fragment } from 'react';

import NavigationBar from '../components/NavigationBar.js'
import MidiPlayer from'../components/MidiPlayer.js'
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <NavigationBar></NavigationBar>
                <Header></Header>
                <MidiPlayer></MidiPlayer>
                <Footer></Footer>
            </Fragment>
        )
    };
}

export default Home;