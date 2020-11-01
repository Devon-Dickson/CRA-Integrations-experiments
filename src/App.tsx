import React from "react";
import "App.css";
import Header from "components/Molecules/Header";
import { Route, Switch } from "wouter";
import paths from "paths";

function App() {
    return (
        <div className="App">
            <Header
                onLogin={() => {}}
                onLogout={() => {}}
                user={{ name: "devon" }}
                onCreateAccount={() => {}}
                paths={paths}
            />
            <Switch>
                {paths.map(({ component, path }) => (
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
