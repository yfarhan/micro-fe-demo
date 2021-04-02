import React from "react";
import ReactDOM from "react-dom";
import {
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import Card from "./components/Card";
import "./index.css";

import { load, subscribe } from "baseApp/store";
import Search from "baseApp/Search";
import DataComponent from "baseApp/DataComponent";

load("vpcs");

import Counter from './components/Counter';

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  }
});

const App = () => <div>
  <ChakraProvider theme={customTheme}>
    <div
      style={{
        maxWidth: "960px",
        margin: "auto",
        display: "block",
        gridTemplateColumns: "1fr 3fr",
        gridColumnGap: "1rem",
        marginTop: "10px"
      }}
    >
      <div>
        <Counter />
        <br />
      </div>
    </div>
  </ChakraProvider>
</div>;

// ReactDOM.render(<App />, document.getElementById("app"));
export default App;