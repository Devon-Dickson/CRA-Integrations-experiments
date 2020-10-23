import React from "react";
import logo from "./logo.svg";
import "App.css";
import { Heading, Section } from "components/Heading";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Heading>Heading 1</Heading>
                <Section>
                    <Heading>Heading 2</Heading>
                    <Section>
                        <Heading>Heading 3</Heading>
                        <Heading>Heading 3</Heading>
                        <Section>
                            <Heading>Heading 4</Heading>
                            <Section>
                                <Heading>Heading 5</Heading>
                                <Section>
                                    <Heading>Heading 6</Heading>
                                    <Section>
                                        <Heading>Heading 6</Heading>
                                        <Section>
                                            <Heading>Heading 6</Heading>
                                            <Section>
                                                <Heading>Heading 6</Heading>
                                                <Section>
                                                    <Heading>Heading 6</Heading>
                                                </Section>
                                            </Section>
                                        </Section>
                                    </Section>
                                </Section>
                                <Heading>Heading 5</Heading>
                                <Heading>Heading 5</Heading>
                            </Section>
                        </Section>
                        <Heading>Heading 3</Heading>
                    </Section>
                </Section>

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
