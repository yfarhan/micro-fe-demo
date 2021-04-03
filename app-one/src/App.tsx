import React, { useEffect } from "react";
import { connect } from 'react-redux';
import {
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import "./index.css";

import { load, updateStore } from "baseApp/store";
import Search from "baseApp/Search";
import Card from "./components/Card";

import Counter from './components/Counter';

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  }
});

const App = ({ updateStore, state }) => {
  useEffect(() => {
    load("vpcs", updateStore);
  }, []);

  return (
    <div>
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
            <Search />
            <br />
            {state.store.filteredVpcs.map((vpc) => (
              <Card vpc={vpc} />
            ))}
          </div>
        </div>
      </ChakraProvider>
    </div>
  )
}

const mStoP = state => ({
  state: state
});

const mDtoP = d => ({
  updateStore: o => d(updateStore(o))
});

export default connect(mStoP, mDtoP)(App);