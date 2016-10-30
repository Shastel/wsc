import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Application from 'components/application/application';
import injectTapEventPlugin from "react-tap-event-plugin";
import store from 'store';

injectTapEventPlugin();

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('react-main-app')
);
