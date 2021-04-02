import React, { useEffect } from "react";
import { SimpleGrid, Text, ChakraProvider } from "@chakra-ui/react";
import { updateStore } from './store';
import { connect } from 'react-redux';
import Search from "./components/Search";
import Vpcs from "./components/Vpcs";
import Info from "./components/Info";
import { load } from './store';
import "./index.css";

const H3 = ({ children }) => (
  <Text fontSize="xl" mb={3} fontWeight="bold" textAlign="center">
    {children}
  </Text>
);

const App = (props) => {
  const {
    updateStore,
    filteredVpcs
  } = props;

  useEffect(() => {
    load('vpcs', updateStore);
  }, [])

  return (
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
          <Vpcs filteredVpcs={filteredVpcs} />
        </div>
        <div>
          <H3>Info</H3>
          <Info />
        </div>
      </SimpleGrid>
    </ChakraProvider>
  )
};

const mStoP = state => ({
  filteredVpcs: state.store.filteredVpcs
});

const mDtoP = d => ({
  updateStore: store => d(updateStore(store))
});

export default connect(mStoP, mDtoP)(App);
