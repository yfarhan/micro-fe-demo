import React from "react";
import { connect } from 'react-redux';
import {
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import "./index.css";

import { load } from "baseApp/store";
import Card from "./components/Card";
import Search from "baseApp/Search";
import DataComponent from "baseApp/DataComponent";

load("vpcs", console.log);

import Counter from './components/Counter';

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  }
});

const App = () => {
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
  
});

export default connect(mStoP, mDtoP)(App);