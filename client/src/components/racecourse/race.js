import React from 'react';
import {grey500} from 'material-ui/styles/colors';

//components
import {PureComponent} from 'react';
import FontIcon from 'material-ui/FontIcon';

export default class Race extends PureComponent {
    createPlayersList(players) {

    }

    render() {
        const {index, players} = this.props;

        return (
            <div className={`race`}>
                <div className="race-header">
                    <FontIcon
                        className="material-icons"
                        color={grey500}
                    >
                        {`filter_${index + 1}`}
                    </FontIcon>
                </div>

                <div className="race-players">
                    {
                        players.map((player) => {
                            return <div>{player.name}</div>
                        })
                    }
                </div>
            </div>
        );
    }
};
