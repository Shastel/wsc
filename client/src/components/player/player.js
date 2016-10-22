import './_player.styl';
import React from 'react';

//components
import { PureComponent } from 'react';


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
