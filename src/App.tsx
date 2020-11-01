import React from "react";
import "App.css";
import Header from "components/Molecules/Header";
import { Route, Switch } from "wouter";
import routes from "RouteConfig";

function App() {
    return (
        <div className="App">
            <Header
                onLogin={() => {}}
                onLogout={() => {}}
                user={{ name: "devon" }}
                onCreateAccount={() => {}}
                routes={routes}
            />
            <Switch>
                {routes.map(({ component, path }) => (
                    <Route
                        key={`route-${path}`}
                        path={path}
                        component={component}
                    />
                ))}
            </Switch>
        </div>
    );
}

export default App;
