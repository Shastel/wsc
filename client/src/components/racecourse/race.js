import React from 'react';
import {grey500} from 'material-ui/styles/colors';

//components
import {PureComponent} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Player from '../player/player';

//icons
import { names, icons } from './names_and_icons';

export default class Race extends PureComponent {
    render() {
        const {index, players} = this.props;
        const iconStyle = {
            fontSize: 35
        };

        return (
            <div className={`race`}>
                <div className="race-header">
                    <FontIcon
                        className="material-icons"
                        //TODO: COLORS COST
                        style={iconStyle}
                        color={'black'}
                    >
                        {icons[index]}
                    </FontIcon>
                    <div className="race-name">{names[index]}</div>
                </div>

                <div className="race-players">
                    {
                        players.map((player) => {
                            return <Player key={player.name} name={player.name} />
                        })
                    }
                </div>
            </div>
        );
    }
};
