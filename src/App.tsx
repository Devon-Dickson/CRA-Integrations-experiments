import React from "react";
import "App.css";
import Header from "components/Molecules/Header";
import { Route, Switch } from "wouter";
import routes from "RouteConfig";
import NavDrawer from "components/compounds/NavDrawer";
import * as S from "./style";

function App() {
    return (
        <S.Wrapper>
            <Header
                onLogin={() => {}}
                onLogout={() => {}}
                user={{ name: "devon" }}
                onCreateAccount={() => {}}
                routes={routes}
            />
            <NavDrawer routes={routes} />
            <S.Content>
                <Switch>
                    {routes.map(({ component, path }) => (
                        <Route
                            key={`route-${path}`}
                            path={path}
                            component={component}
                        />
                    ))}
                </Switch>
            </S.Content>
        </S.Wrapper>
    );
}

export default App;
