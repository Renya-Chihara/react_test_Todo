import { StrictMode } from "react";
import ReactDom from "react-dom";

//import App from "./App";

const App = () => {
  return <h1>こんにちは</h1>;
};

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
