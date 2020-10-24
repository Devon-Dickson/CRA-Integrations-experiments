import React from "react";
import * as Sentry from "@sentry/react";
import logo from "./logo.svg";
import "App.css";
import { Heading, Section } from "components/Heading";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Sentry.ErrorBoundary
                    fallback={<div>An error has occured</div>}
                >
                    <Section>
                        <Section>
                            <Section>
                                <Section>
                                    <Section>
                                        <Section>
                                            <Heading>Heading</Heading>
                                        </Section>
                                    </Section>
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                </Sentry.ErrorBoundary>
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
