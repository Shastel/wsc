import './_application.styl';

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

//components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from 'components/header/header';
import Racecourse from 'components/racecourse/racecourse';

//selectors
import { playersList } from 'selectors/players_selectors';

class Application extends Component {

    render() {
        const { playersList } = this.props;
        //stub for timers
        const start = new Date();
        const end = new Date(start.getTime() + (2*60*60*1000));

        return (
            <MuiThemeProvider>
                <div className="main-container">
                    <Header />
                    <Racecourse
                        start={start}
                        end={end}
                        players={playersList}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

const applicationSelector = createSelector([playersList], (playersList) => {
    return {
        playersList,
    }
});

export default connect(applicationSelector)(Application);
