import React from "react";
import ReactDOM from "react-dom";
import { SimpleGrid, Text, ChakraProvider } from "@chakra-ui/react";

import Search from "./components/Search";
import Vpcs from "./components/Vpcs";
import Info from "./components/Info";

import { load } from './store';
import "./index.css";
load('vpcs');

const H3 = ({ children }) => (
  <Text fontSize="xl" mb={3} fontWeight="bold" textAlign="center">
    {children}
  </Text>
);

const App = () => (
  <ChakraProvider>
    <SimpleGrid
      columns={[1, 1, 3]}
      spacing={10}
      m={[1, 1, 6]}
      templateColumns="1fr 3fr 1fr"
      gap={1}
    >
      <div>
        <H3>Search</H3>
        <Search />
      </div>
      <div>
        <H3>Vpcs</H3>
        <Vpcs />
      </div>
      <div>
        <H3>Info</H3>
        <Info />
      </div>
    </SimpleGrid>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
