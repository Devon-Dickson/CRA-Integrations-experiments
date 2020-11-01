import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./index.css";
import App from "./App";

Sentry.init({
    enabled: process.env.NODE_ENV === "production",
    dsn:
        "https://43e6e5b91a5340f89fc7079a39947c1a@o466374.ingest.sentry.io/5480642",
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    environment: process.env.NODE_ENV,
    release:
        process.env.NODE_ENV === "production"
            ? process.env.REACT_APP_GIT_SHA
            : undefined,
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
