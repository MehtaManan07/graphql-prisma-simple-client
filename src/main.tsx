import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createClient, Provider as UrqlProvider} from "urql";

const client = createClient({
  url: import.meta.env.VITE_API_URL || "http://localhost:4000/graphql",
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UrqlProvider value={client}>
      <App />
    </UrqlProvider>
  </React.StrictMode>
);
