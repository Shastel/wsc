import './_racecourse.styl';

import React from 'react';


//components
import { PureComponent } from 'react';
import Time from '../time/time';
import Race from './race';
import Header from './header';

export default class Racecourse extends PureComponent {

    render() {
        const { players, start, end } = this.props;
        return (
            <div className="racecourse">
                <div className="header-container">
                    <Header />
                    <Time
                        start={start}
                        end={end}
                    />
                </div>
                <div className="races-container">
                    <Race
                        type={'start'}
                    />
                    <Race
                        type={'first'}
                    />
                    <Race
                        type={'second'}
                    />
                    <Race
                        type={'finish'}
                    />
                </div>
            </div>
        );
    }
};
