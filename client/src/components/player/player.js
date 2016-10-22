import './_player.styl';
import React from 'react';
import { red500 } from 'material-ui/styles/colors';

//components
import { PureComponent } from 'react';
import FontIcon from 'material-ui/FontIcon';


export default class Header extends PureComponent {

    render() {
        const { name } = this.props;
        const iconStyle = {
            fontSize: 20,
            position: 'absolute'
        };

        return (
            <div className="player">

                <span>{name}</span>
            </div>
        );
    }
};
