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

subscribe((state) => console.log('[parent]',  state))

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
        <Search />
        <br />
        <DataComponent>
          {({ filteredVpcs }) => filteredVpcs.map((vpc) => (
            <Card vpc={vpc} />
          ))}
        </DataComponent>
      </div>
    </div>
  </ChakraProvider>
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
