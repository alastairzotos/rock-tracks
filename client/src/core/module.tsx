import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Epic, createEpicMiddleware } from "redux-observable";
import { Reducer, createStore, applyMiddleware, compose, Store } from "redux";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { IPages } from './pages';

export interface IModule {
    epic: Epic;
    reducer: Reducer;
    pages: IPages;
}

const Root: React.FC<{
    store: Store,
    pages: IPages,
}> = ({
    store,
    pages,
}) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                {
                    Object.keys(pages).map((url) => (
                        <Route key={url} path={url} exact component={pages[url]} />
                    ))
                }
                </Switch>
            </Router>
        </Provider>
    );
};

export const applyModule = (module: IModule) => {
    const composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || compose;

    const epicMiddleware = createEpicMiddleware();
    const store = createStore(module.reducer,
        composeEnhancers(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(module.epic);

    ReactDOM.render(<Root store={store} pages={module.pages} />, document.getElementById("app"));
};
