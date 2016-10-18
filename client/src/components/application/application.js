import './_application.styl';

import React from 'react';
import { Component } from 'react';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Logo from '../logo/logo';
import Racecourse from '../racecourse/racecourse';
//stub
import generatePlayers from './generatePlayers';

export default class Application extends Component {

    render() {

        //stub for timers
        const start = new Date();
        const end = new Date(start.getTime() + (2*60*60*1000));

        return (
            <MuiThemeProvider>
                <div className="main-container">
                    <AppBar
                        title="Websocket Challenge"
                        iconElementLeft={ <Logo /> }
                    />
                    <Racecourse
                        start={start}
                        end={end}
                        players={generatePlayers()}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
};
