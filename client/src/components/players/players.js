import './_players.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Progress from '../progress/progress';

export default class Players extends PureComponent {

    render() {
        const headerStyle = {
            fontSize: 25
        };
        return (
            <List className="players-list">
                <Subheader className="players-header" style={headerStyle}>
                    <span>Players</span>
                </Subheader>
                <div className="player">
                    <span>Chelsea Otakan</span>
                    <Progress length={4} completed={3}/>
                </div>
                <div className="player">
                    <span>Eric Hoffman</span>
                    <Progress length={4} completed={2}/>
                </div>
                <div className="player">
                    <span>Chelsea Otakan</span>
                    <Progress length={4} completed={0}/>
                </div>
                <div className="player">
                    <span>James Anderson</span>
                    <Progress length={4} completed={1}/>
                </div>
                <div className="player">
                    <span>James Anderson</span>
                    <Progress length={4} completed={2}/>
                </div>
                <div className="player">
                    <span>Kerem Suer</span>
                    <Progress length={4} completed={2}/>
                </div>

            </List>
        );
    }
};
