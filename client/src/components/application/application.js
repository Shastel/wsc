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
import { start, end } from 'selectors/game_selectors';
import { playersList } from 'selectors/players_selectors';

class Application extends Component {

    render() {
        const {
            playersList,
            start,
            end,
        } = this.props;

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

const applicationSelector = createSelector(
    [playersList, start, end],
    (playersList, start, end) => {
    return {
        playersList,
        start,
        end,
    }
});

export default connect(applicationSelector)(Application);
