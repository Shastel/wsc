import React from 'react';

//components
import { PureComponent } from 'react';

export default class Race extends PureComponent {

    render() {
        const { players, type } = this.props;

        return (
            <div className={`race ${type}`}>Start</div>
        );
    }
};
