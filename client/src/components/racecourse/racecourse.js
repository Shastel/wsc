import './_racecourse.styl';

import React from 'react';

//components
import { PureComponent } from 'react';
import Time from '../time/time';

export default class Racecourse extends PureComponent {

    render() {
        const { players, start, end } = this.props;

        return (
            <div className="racecourse">
                <Time
                    start={start}
                    end={end}
                />
                <div className="race">Start</div>
                <div className="race">First</div>
                <div className="race">Second</div>
                <div className="race">Finish</div>
            </div>
        );
    }
};
