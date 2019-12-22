import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Epic, createEpicMiddleware } from "redux-observable";
import { Reducer, createStore, applyMiddleware, compose, Store } from "redux";

export interface IModule {
    epic: Epic;
    reducer: Reducer;
}

const Root: React.FC<{
    store: Store,
}> = ({
    store,
}) => {
    return (
        <Provider store={store}>
            <h1>Hello</h1>
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

    ReactDOM.render(<Root store={store} />, document.getElementById("app"));
};
